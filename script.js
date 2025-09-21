// Courses for each field
const coursesData = {
    CSE: ["Python Basics","Advanced Python","Java Programming","C++ Programming","Data Structures",
        "Algorithms","Web Development","Front-end Development","Back-end Development","Full-stack Development",
        "Database Management","SQL Basics","NoSQL Databases","Cloud Computing","AWS Essentials",
        "Azure Fundamentals","Machine Learning","Deep Learning","AI Basics","Cybersecurity",
        "Network Fundamentals","Mobile App Development","System Design","Operating Systems","Computer Architecture"],
    Agri: ["Soil Science","Crop Production","Agricultural Technology","Irrigation Methods","Farm Management",
        "Sustainable Farming","Agri-business","Horticulture","Plant Pathology","Entomology",
        "Agri Economics","Post-harvest Technology","Precision Agriculture","Organic Farming","Greenhouse Management",
        "Agri Robotics","Food Science","Agri Data Analytics","Seed Technology","Pest Management",
        "Farm Mechanization","Livestock Management","Agri Marketing","Rural Development","Agronomy"],
    Business: ["Marketing Basics","Advanced Marketing","Finance Fundamentals","Accounting","Business Analytics",
        "Leadership Skills","Project Management","Entrepreneurship","Business Communication","Excel for Business",
        "Data Analysis","Digital Marketing","HR Management","Operations Management","Supply Chain Management",
        "Strategy & Planning","Negotiation Skills","Customer Relationship Management","E-commerce","Business Law",
        "Investment Analysis","Market Research","Brand Management","Risk Management","Organizational Behavior"]
};

// Field-specific AI advice
const aiAdvice = {
    CSE: ["Focus on data structures & algorithms for problem-solving.",
          "Work on AI or web projects to build practical skills.",
          "Participate in hackathons & coding challenges.",
          "Explore cloud computing and DevOps concepts.",
          "Learn software architecture and system design."],
    Agri: ["Use modern agri-tech & precision farming tools.",
           "Learn sustainable and organic farming techniques.",
           "Gain hands-on experience in farms or startups.",
           "Study crop yield optimization and supply chain.",
           "Apply data analytics to agricultural decisions."],
    Business: ["Develop analytical skills for business insights.",
               "Gain exposure to marketing & finance tools.",
               "Work on case studies & projects to learn strategy.",
               "Improve communication and leadership skills.",
               "Learn digital transformation & business analytics."]
};

// Dummy job roles
const jobData = {
    CSE: ["Software Engineer Intern","AI Research Intern","Web Developer","Data Analyst Intern","Cloud Intern"],
    Agri: ["Agronomy Intern","Farm Management Intern","Agri-Tech Analyst","Sustainable Farming Intern","Horticulture Intern"],
    Business: ["Business Analyst Intern","Marketing Intern","Project Management Intern","Finance Intern","HR Intern"]
};

// Populate courses dropdown
document.getElementById('field').addEventListener('change', () => {
    const field = document.getElementById('field').value;
    const dropdown = document.getElementById('coursesDone');
    dropdown.innerHTML = '<option value="">--Select Course--</option>';
    if(coursesData[field]){
        coursesData[field].forEach(course => {
            const opt = document.createElement('option');
            opt.value = course;
            opt.textContent = course;
            dropdown.appendChild(opt);
        });
    }
});

// Recommendation button with simulated AI thinking
document.getElementById('getAdviceBtn').addEventListener('click', () => {
    const field = document.getElementById('field').value;
    const output = document.getElementById('output');
    const jobCards = document.getElementById('jobCards');

    if(!field){
        alert("Please select a field.");
        return;
    }

    // Show typing effect
    output.innerHTML = `<span class="typing">AI is analyzing your profile and generating recommendations...</span>`;
    output.style.opacity = 1;

    // Simulate delay (1.5 seconds)
    setTimeout(() => {
        // Pick 2-3 random AI recommendations
        let advice = aiAdvice[field].sort(() => 0.5 - Math.random()).slice(0, 3);
        output.innerHTML = `Based on your selection, you can focus on: ${advice.join(" | ")}<br>
                            You may also consider doing: ${advice.map(a => a.split(".")[0]).join(", ")}.`;

        // Job cards
        jobCards.innerHTML = "";
        jobData[field].forEach(job => {
            const div = document.createElement('div');
            div.className = 'job-card';
            div.textContent = job;
            jobCards.appendChild(div);
        });
    }, 1500);
});
