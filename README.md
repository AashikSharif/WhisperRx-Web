# 🩺 WhisperRx

WhisperRx is an AI-powered medical voice scribing and patient management web application designed for doctors and patients. It simplifies the process of documenting patient visits through voice recordings, AI transcription and automatic generation of structured SOAP medical reports.

[![WhisperRx](https://github.com/user-attachments/assets/9a105720-f3d7-48f1-915b-5e8b51b76112)](https://youtu.be/07HW64FbT-I)
---
## 🚀 Features

- **Voice-to-Text Transcription**  
  Doctors can record conversations with patients which are then transcribed using **Cloudflare Whisper**.

- **AI Diagnosis Summarization**  
  Transcripts are passed through **Perplexity** to generate structured SOAP (Subjective, Objective, Assessment, Plan) medical summaries.

- **Appointment Booking**  
  Patients can book appointments with doctors using a calendar and time picker interface.

- **Visit History**  
  Both doctors and patients can view past visits, along with transcripts and AI-generated medical notes.

- **Role-Based Dashboards**  
  - Doctors can manage upcoming appointments, record visits, and browse through patient lists.
  - Patients can view appointments, book new ones, and check their medical history.

- **Secure File Uploads**  
  All voice recordings and profile images are securely handled and stored.

- **Responsive UI**  
  Designed to work across both desktop and mobile devices with a clean, intuitive interface.

---

## 🛠️ Tech Stack

- **Backend:** Flask (Python), SQLAlchemy ORM  
- **Frontend:** Jinja2, Tailwind CSS, Flatpickr  
- **Database:** SQLite (can be swapped with PostgreSQL/MySQL)  
- **AI Services:** Cloudflare Whisper (for transcription) & Perplexity (for medical note generation)  
- **Security:** Password hashing with Werkzeug, Session-based login system

---
## 📦 Installation

```bash
git clone https://github.com/yourusername/whisperRx.git
cd whisperrx
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

---

## 🔐 Environment Variables

Create a `.env` file in your root directory and add the following:

```bash
SECRET_KEY=your_flask_secret_key
CLOUDFLARE_ACCOUNT_ID=your_cloudflare_account_id
CLOUDFLARE_API_TOKEN=Bearer your_cloudflare_api_token
MAIL_USERNAME=your_email@example.com
MAIL_PASSWORD=your_email_password
```

> Make sure to keep `.env` in your `.gitignore`.
> Make sure to have 'instance/database.db' if the database doesn't exists.


---
## 🧪 Run the App

```bash
flask run
```
or
```bash
python app.py
```
App will be available at `http://localhost:80`

To Access Frontend:
```bash
cd frontend
npm run dev
```
The Web-App should be accessible at 'http://localhost:5173/'

![Screenshot (280)](https://github.com/user-attachments/assets/e6e29acb-7a65-4d53-b67a-086502346573)
![Screenshot (279)](https://github.com/user-attachments/assets/255d7dff-e80f-409b-aee0-0414442a186a)
![Screenshot (281)](https://github.com/user-attachments/assets/f85d7b5c-1550-4249-9ff7-830c3f842363)
![Screenshot (274)](https://github.com/user-attachments/assets/975091de-a20b-4f57-ac2c-4a0606c30a18)
![Screenshot (275)](https://github.com/user-attachments/assets/c9a74daa-d276-4322-8473-d87ba7353603)


---

## 👥 Contributors


- **Sheheryar Pirzada**  
  [LinkedIn](https://www.linkedin.com/in/peersahab/)

- **Shlok Tomar**  
  [LinkedIn](https://www.linkedin.com/in/shlok-tomar/)

- **Aashik Sharif Basheer Ahamed**  
  [LinkedIn](https://www.linkedin.com/in/aashiksharif/)

- **Arnav Jain**  
  [LinkedIn](https://www.linkedin.com/in/reacharnav/)


---

## 📄 License

This project is licensed under the MIT License.

---

## 💬 Feedback

If you have suggestions, ideas, or want to collaborate — feel free to open an issue or reach out to the contributors above.

