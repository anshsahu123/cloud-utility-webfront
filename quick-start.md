# 🚀 Quick Start: Updated Contact Form Backend

## 📝 What Changed

Your `Server-Updated.js` now handles **ALL** contact form fields:
- firstName, lastName, email, message (required)
- company, phone, budget, timeline, preferredContact (optional)

## ⚡ Quick Setup (3 Steps)

### 1. Replace Server File
```bash
# Backup current file
copy Server.js Server-backup.js

# Use updated version
copy Server-Updated.js Server.js
```

### 2. Configure Email in .env
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password  # Get from Google App Passwords
EMAIL_RECEIVER=admin@cloudutility.com
```

**Gmail App Password Setup:**
1. Go to: https://myaccount.google.com/apppasswords
2. Enable 2-Step Verification first
3. Create "Mail" app password
4. Copy the 16-character password to .env

### 3. Restart Server
```bash
node Server.js
```

## ✅ Test It

```powershell
# Test form submission
$body = @{
    firstName = "Test"
    lastName = "User"
    email = "test@example.com"
    message = "Test message"
    company = "Test Co"
    preferredContact = "email"
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:4000/contact" -Method POST -Body $body -ContentType "application/json"
```

## 📧 What Happens

1. ✅ Form data saved to MongoDB
2. 📧 Admin gets detailed notification email
3. 📧 User gets professional confirmation email
4. ✨ Both emails have beautiful HTML templates

## 🎯 Email Features

**Admin Email:**
- All form fields beautifully formatted
- Quick action buttons (Reply, Call)
- Timestamp in IST

**User Email:**
- Cloud Utility branding
- Confirmation checkmark
- Submission summary
- Contact info & social links

## 🔗 Files Created

- `Server-Updated.js` - Your enhanced backend
- `setup-guide.md` - Detailed documentation
- `quick-start.md` - This file

## ❓ Troubleshooting

**Emails not sending?**
- Use Gmail App Password (not regular password)
- Check EMAIL_USER and EMAIL_PASS in .env
- Look for errors in server console

**Form validation fails?**
- Ensure firstName, lastName, email, message are provided
- Email must be valid format

---

**Need help?** See [setup-guide.md](file:///C:/Users/sahua/.gemini/antigravity/brain/e59c0637-4e94-4be3-8e73-3f5ce60a88ae/setup-guide.md) for detailed instructions.
