import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface InternshipApplication {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  college: string;
  branch: string;
  specialization: string;
  passoutYear: string;
  qualification: string;
  programmingLanguages: string;
  experience: string;
  mode: string;
  duration: string;
  preferredDomain: string;
  realtimeProject: string;
  resume: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const applicationData: InternshipApplication = await req.json();

    console.log("Processing internship application for:", applicationData.email);

    // Create HTML email content
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
            .section { margin-bottom: 25px; }
            .section-title { color: #1e40af; font-size: 18px; font-weight: bold; margin-bottom: 10px; border-bottom: 2px solid #3b82f6; padding-bottom: 5px; }
            .field { margin: 10px 0; }
            .label { font-weight: bold; color: #4b5563; }
            .value { color: #1f2937; margin-left: 10px; }
            .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Internship Application</h1>
              <p>Cloud Utility</p>
            </div>
            <div class="content">
              <div class="section">
                <div class="section-title">Personal Information</div>
                <div class="field"><span class="label">Name:</span><span class="value">${applicationData.firstName} ${applicationData.lastName}</span></div>
                <div class="field"><span class="label">Email:</span><span class="value">${applicationData.email}</span></div>
                <div class="field"><span class="label">Phone:</span><span class="value">${applicationData.phone}</span></div>
              </div>

              <div class="section">
                <div class="section-title">Educational Background</div>
                <div class="field"><span class="label">College:</span><span class="value">${applicationData.college}</span></div>
                <div class="field"><span class="label">Branch:</span><span class="value">${applicationData.branch}</span></div>
                <div class="field"><span class="label">Specialization:</span><span class="value">${applicationData.specialization}</span></div>
                <div class="field"><span class="label">Qualification:</span><span class="value">${applicationData.qualification}</span></div>
                <div class="field"><span class="label">Passout Year:</span><span class="value">${applicationData.passoutYear}</span></div>
              </div>

              <div class="section">
                <div class="section-title">Technical Skills & Experience</div>
                <div class="field"><span class="label">Programming Languages:</span><span class="value">${applicationData.programmingLanguages}</span></div>
                <div class="field"><span class="label">Experience Level:</span><span class="value">${applicationData.experience}</span></div>
                <div class="field"><span class="label">Real-time Project Experience:</span><span class="value">${applicationData.realtimeProject || 'Not provided'}</span></div>
              </div>

              <div class="section">
                <div class="section-title">Internship Preferences</div>
                <div class="field"><span class="label">Preferred Domain:</span><span class="value">${applicationData.preferredDomain}</span></div>
                <div class="field"><span class="label">Mode:</span><span class="value">${applicationData.mode}</span></div>
                <div class="field"><span class="label">Duration:</span><span class="value">${applicationData.duration}</span></div>
              </div>

              ${applicationData.resume ? `
                <div class="section">
                  <div class="section-title">Resume</div>
                  <div class="field"><span class="value">${applicationData.resume}</span></div>
                </div>
              ` : ''}

              <div class="footer">
                <p>This application was submitted through the Cloud Utility Internship Portal</p>
                <p>Received on: ${new Date().toLocaleString()}</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send email to company
    const emailResponse = await resend.emails.send({
      from: "Cloud Utility Internships <onboarding@resend.dev>",
      to: ["sahuansh626@gmail.com"],
      subject: `New Internship Application - ${applicationData.firstName} ${applicationData.lastName} (${applicationData.preferredDomain})`,
      html: htmlContent,
    });

    console.log("Email sent successfully to sahuansh626@gmail.com:", emailResponse);

    // Send confirmation email to applicant
    const confirmationEmail = await resend.emails.send({
      from: "Cloud Utility Internships <onboarding@resend.dev>",
      to: [applicationData.email],
      subject: "Application Received - Cloud Utility Internship Program",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
              .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
              .highlight { color: #1e40af; font-weight: bold; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Application Received!</h1>
              </div>
              <div class="content">
                <h2>Dear ${applicationData.firstName},</h2>
                <p>Thank you for applying to the <span class="highlight">Cloud Utility Internship Program</span>!</p>
                <p>We have successfully received your application for the <span class="highlight">${applicationData.preferredDomain}</span> domain.</p>
                <p>Our HR team will review your application and get back to you within 3-5 business days.</p>
                <p>If you have any questions, feel free to reach out to us.</p>
                <p>Best regards,<br><strong>Cloud Utility HR Team</strong></p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    console.log("Confirmation email sent to applicant:", confirmationEmail);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Application submitted successfully",
        emailId: emailResponse.id 
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-internship-application function:", error);
    return new Response(
      JSON.stringify({ 
        success: false,
        error: error.message 
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);
