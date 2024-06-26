// Function to load content for each section
function loadContent(section) {
    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear existing content


    // Determine which section to load based on the section parameter
    switch(section) {
        case 'dashboard':
            showDashboard();
            break;
        case 'personal':
            showPersonalInfo();
            break;
        case 'academic':
            showAcademicRecords();
            break;
        case 'courses':
            showCourseCatalog();
            break;
        case 'registration':
            showRegistration();
            break;
        case 'schedule':
            showClassSchedule();
            break;
        case 'grades':
            showGradesGPA();
            break;
        case 'financial':
            showFinancialInfo();
            break;
        case 'advising':
            showAcademicAdvising();
            break;
        case 'transcripts':
            showTranscripts();
            break;
            case 'postpone':
                showPostponeExam();
                break;
            case 'courseRegistration':
                showCourseRegistration();
                break;
            case 'eServices':
                showEServices();
                break;
            default:
                 // Display an error message if the section is not found
                content.innerHTML = '<div class="card"><h2>Section not found</h2></div>';
      
    }
}

function showDashboard() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <div class="card">
            <h2><i class="fas fa-tachometer-alt icon"></i>Dashboard</h2>
            <p>Welcome, Mohammed Alnuseirat!</p>
            <p><strong>Announcements:</strong> Check your email for important updates.</p>
            <p><strong>Next Class:</strong> TM251 at 10:00 AM</p>
            <p><strong>Upcoming Deadlines:</strong></p>
            <ul>
                <li>Math Assignment - Due in 2 days</li>
                <li>Physics Lab Report - Due in 5 days</li>
            </ul>
        </div>
    `;
}

function showPersonalInfo() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <div class="card">
            <h2><i class="fas fa-user icon"></i>Personal Information</h2>
            <table>
                <tr><th>Name</th><td>Mohammed Alnuseirat</td></tr>
                <tr><th>Student ID</th><td>12345678</td></tr>
                <tr><th>Major</th><td>Computer Science</td></tr>
                <tr><th>Advisor</th><td>Dr. Ali Mohammed</td></tr>
                <tr><th>Email</th><td>12334ksa@aou.edu.sa</td></tr>
                <tr><th>Phone</th><td>+966 50 123 4567</td></tr>
            </table>
            <button class="btn">Update Information</button>
        </div>
    `;
}

function showAcademicRecords() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <div class="card">
            <h2><i class="fas fa-book icon"></i>Academic Records</h2>
            <table>
                <tr><th>Degree Progress</th><td>65% complete</td></tr>
                <tr><th>Total Credits</th><td>78/132</td></tr>
                <tr><th>Academic Standing</th><td>Good Standing</td></tr>
                <tr><th>Current GPA</th><td>3.2</td></tr>
                <tr><th>Expected Graduation</th><td>Spring 2026</td></tr>
            </table>
            <button class="btn">View Detailed Record</button>
        </div>
    `;
}

function showCourseCatalog() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <div class="card">
            <h2><i class="fas fa-chalkboard icon"></i>Course Catalog</h2>
            <p>Browse available courses for the upcoming semester:</p>
            <table>
                <tr><th>Course Code</th><th>Course Name</th><th>Credits</th><th>Prerequisites</th></tr>
                <tr><td>M251</td><td>Object-Orinted Programming using Java</td><td>3</td><td>TM105</td></tr>
                <tr><td>MT129</td><td>Calculus and Probabilty</td><td>3</td><td>EL111</td></tr>
                <tr><td>TM103</td><td>Computer Organization and Architecture</td><td>4</td><td>EL111</td></tr>
            </table>
            <button class="btn">View Full Catalog</button>
        </div>
    `;
}

function showRegistration() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <div class="card">
            <h2><i class="fas fa-edit icon"></i>Registration</h2>
            <p><strong>Current Term:</strong> Fall 2024</p>
            <p><strong>Registration Status:</strong> Open</p>
            <p><strong>Registered Courses:</strong></p>
            <table>
                <tr><th>Course Code</th><th>Course Name</th><th>Credits</th><th>Schedule</th></tr>
                <tr><td>TM298</td><td>Oprating Systems</td><td>3</td><td>MW 10:00-11:30</td></tr>
                <tr><td>MT101</td><td>Math</td><td>3</td><td>TTh 13:00-14:30</td></tr>
            </table>
            <button class="btn">Add/Drop Courses</button>
        </div>
    `;
}

function showClassSchedule() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <div class="card">
            <h2><i class="fas fa-calendar-alt icon"></i>Class Schedule</h2>
            <table>
                <tr><th>Day</th><th>Time</th><th>Course</th><th>Room</th></tr>
                <tr><td>Monday</td><td>10:00-11:30</td><td>M251</td><td>Room A101</td></tr>
                <tr><td>Monday</td><td>13:00-14:30</td><td>MT129</td><td>Room B205</td></tr>
                <tr><td>Tuesday</td><td>09:00-10:30</td><td>TM103</td><td>Lab C301</td></tr>
                <tr><td>Wednesday</td><td>10:00-11:30</td><td>M251</td><td>Room A101</td></tr>
                <tr><td>Thursday</td><td>13:00-14:30</td><td>MT129</td><td>Room B205</td></tr>
            </table>
        </div>
    `;
}

function showGradesGPA() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <div class="card">
            <h2><i class="fas fa-chart-line icon"></i>Grades & GPA</h2>
            <p><strong>Current GPA:</strong> 3.2</p>
            <p><strong>Current Term Grades:</strong></p>
            <table>
                <tr><th>Course</th><th>Grade</th></tr>
                <tr><td>M251</td><td>A</td></tr>
                <tr><td>MT129</td><td>A-</td></tr>
                <tr><td>TM103</td><td>B+</td></tr>
            </table>
            <button class="btn">View Full Grade History</button>
        </div>
    `;
}

function showFinancialInfo() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <div class="card">
            <h2><i class="fas fa-dollar-sign icon"></i>Financial Information</h2>
            <p><strong>Current Balance:</strong> SAR 5,000</p>
            <p><strong>Payment Due Date:</strong> September 15, 2024</p>
            <table>
                <tr><th>Item</th><th>Amount</th></tr>
                <tr><td>Tuition Fee</td><td>SAR 10,000</td></tr>
                <tr><td>Books and Supplies</td><td>SAR 1,000</td></tr>
                <tr><td>Scholarship</td><td>-SAR 4,000</td></tr>
                <tr><td>Payment Made</td><td>-SAR 1,000</td></tr>
            </table>
            <button class="btn">Make a Payment</button>
            <button class="btn">View Payment History</button>
        </div>
    `;
}

function showAcademicAdvising() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <div class="card">
            <h2><i class="fas fa-user-tie icon"></i>Academic Advising</h2>
            <p><strong>Academic Advisor:</strong> Dr. Ali Mohammed</p>
            <p><strong>Email:</strong> Alim@aou.edu.sa</p>
            <p><strong>Office:</strong> Building A, Room 302</p>
            <p><strong>Office Hours:</strong> Monday and Wednesday, 2:00 PM - 4:00 PM</p>
            <p><strong>Next Available Appointment:</strong> August 10, 2024, 3:00 PM</p>
            <button class="btn">Schedule an Appointment</button>
            <button class="btn">View Degree Plan</button>
        </div>
        <div class="card">
            <h2>Academic Progress</h2>
            <p><strong>Major GPA:</strong> 3.2</p>
            <p><strong>Credits Completed:</strong> 78/132</p>
            <p><strong>Remaining Required Courses:</strong></p>
            <ul>
                <li>CS401 - Advanced Algorithms</li>
                <li>CS450 - Operating Systems</li>
                <li>MATH401 - Numerical Analysis</li>
            </ul>
        </div>
    `;
}

function showTranscripts() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <div class="card">
            <h2><i class="fas fa-file-alt icon"></i>Transcripts</h2>
            <p>You can request official or unofficial transcripts here.</p>
            <p><strong>Official Transcript:</strong> This is a certified document that includes all completed coursework, grades, and degrees awarded. It is signed and sealed by the university registrar.</p>
            <p><strong>Unofficial Transcript:</strong> This is for personal use and includes all completed coursework and grades, but is not certified by the university.</p>
            <button class="btn">Request Official Transcript</button>
            <button class="btn">View Unofficial Transcript</button>
        </div>
        <div class="card">
            <h2>Transcript Request History</h2>
            <table>
                <tr><th>Date</th><th>Type</th><th>Status</th></tr>
                <tr><td>May 15, 2024</td><td>Official</td><td>Processed</td></tr>
                <tr><td>March 3, 2024</td><td>Unofficial</td><td>Completed</td></tr>
                <tr><td>January 10, 2024</td><td>Official</td><td>Processed</td></tr>
            </table>
        </div>
    `;
}
function showPostponeExam() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <div class="card">
            <h2><i class="fas fa-calendar-times icon"></i>Postpone Exam</h2>
            <p>Use this form to request postponement of an exam due to valid reasons.</p>
            <form>
                <label for="course">Course:</label>
                <select id="course" name="course">
                    <option value="">Select a course</option>
                    <option value="M251">M251 - Object-Orinted Programming using Java</option>
                    <option value="MT129">MT129 - Calculus and Probablity</option>
                    <option value="TM103">PHYS102 - Computer Organization and Architecture</option>
                </select><br><br>
                <label for="examDate">Exam Date:</label>
                <input type="date" id="examDate" name="examDate"><br><br>
                <label for="reason">Reason for Postponement:</label><br>
                <textarea id="reason" name="reason" rows="4" cols="50"></textarea><br><br>
                <button type="submit" class="btn">Submit Request</button>
            </form>
        </div>
    `;
}

function showCourseRegistration() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <div class="card">
            <h2><i class="fas fa-book-open icon"></i>Course Registration</h2>
            <p>Register for courses for the upcoming semester.</p>
            <table>
                <tr><th>Course Code</th><th>Course Name</th><th>Credits</th><th>Action</th></tr>
                <tr>
                    <td>CS401</td><td>Advanced Algorithms</td><td>3</td>
                    <td><button class="btn">Add</button></td>
                </tr>
                <tr>
                    <td>CS450</td><td>Operating Systems</td><td>3</td>
                    <td><button class="btn">Add</button></td>
                </tr>
                <tr>
                    <td>MATH401</td><td>Numerical Analysis</td><td>3</td>
                    <td><button class="btn">Add</button></td>
                </tr>
            </table>
            <button class="btn">Submit Registration</button>
        </div>
    `;
}

function showEServices() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <div class="card">
            <h2><i class="fas fa-cogs icon"></i>E-Services</h2>
            <ul>
                <li><a href="#" onclick="showAidRequest()">Aid Request</a></li>
                <li><a href="#" onclick="showSocialReward()">Social Reward</a></li>
                <li><a href="#" onclick="showAppeal()">Appeal</a></li>
                <li><a href="#" onclick="showComplaintForm()">Complaint Form</a></li>
                <li><a href="#" onclick="showMakeupExpectedAttendance()">Makeup Expected Attendance</a></li>
            </ul>
        </div>
    `;
}



function showAidRequest() {
}

function showSocialReward() {
}

function showAppeal() {
}

function showComplaintForm() {
}

function showMakeupExpectedAttendance() {
}

function openLMS() {
    window.open('https://ksalms.arabou.edu.kw', 'lms');
}

function editPersonalInfo() {
    alert('Edit personal information functionality to be implemented.');
}

function changePassword() {
    alert('Change password functionality to be implemented.');
}