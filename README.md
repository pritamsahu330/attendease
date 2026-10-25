# AttendEase — Full MERN Employee Attendance Management System

AttendEase is a full-fledged MERN stack employee attendance management system.

## Main features

### Dashboard
- Total employees
- Present / absent / late / leave today
- Attendance percentage
- Department-wise employee count
- Recent attendance
- Quick actions

### Employee Management
- Add employee
- Edit employee
- Delete employee
- Search
- Department filter
- Status filter
- Employee profile view
- Employee attendance history

### Attendance Management
- Mark Present / Absent / Late / Leave
- Mark attendance for a selected date
- Update existing attendance
- Bulk mark all employees
- Attendance history
- Date and status filters
- Remarks

### Reports
- Employee/date/status filters
- Attendance summary
- Employee-wise attendance
- Monthly report
- CSV export from the browser

### Departments
- Department list
- Department-wise employee counts
- Add department
- Delete department when unused

## Architecture

React → Axios → Express REST API → Mongoose → MongoDB Atlas

## Backend API

Employees:
- GET /api/employees
- GET /api/employees/:id
- POST /api/employees
- PUT /api/employees/:id
- DELETE /api/employees/:id
- GET /api/employees/:id/attendance

Attendance:
- GET /api/attendance
- GET /api/attendance/today
- POST /api/attendance
- PUT /api/attendance/:id
- DELETE /api/attendance/:id
- POST /api/attendance/bulk

Dashboard:
- GET /api/dashboard/stats

Departments:
- GET /api/departments
- POST /api/departments
- DELETE /api/departments/:id

## Run

### Backend
cd backend
npm install

Copy `.env.example` to `.env` and add your MongoDB Atlas URI.

npm run dev

### Frontend
cd frontend
npm install
npm run dev

Frontend: http://localhost:5173
Backend: http://localhost:5001

Do not commit `.env`.
