export function createTheHTML(senderName: string) {
	return `
      <html>
          <head>
              <style>
                  body {
                      font-family: Arial, sans-serif;
                      line-height: 1.6;
                      color: #333;
                  }
                  .container {
                      width: 80%;
                      margin: 0 auto;
                      padding: 20px;
                      border: 1px solid #ccc;
                      border-radius: 5px;
                      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                      background-color: #f9f9f9;
                  }
                  .header {
                      text-align: center;
                      padding-bottom: 20px;
                      border-bottom: 1px solid #ccc;
                  }
                  .content {
                      margin-top: 20px;
                  }
              </style>
          </head>
          <body>
              <div class="container">
                  <div class="header">
                      <h1>Thank You, ${senderName}!</h1>
                  </div>
                  <div class="content">
                      <p>Dear ${senderName},</p>
                      <p>Thank you for reaching out. I have recieved your message successfully and will get back to you shortly.</p>
                      <p>Best regards,</p>
                      <p>Mohamed Amer</p>
                  </div>
              </div>
          </body>
      </html>
  `
}
