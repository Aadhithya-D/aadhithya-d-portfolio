export const falconSight = {
    title: "FalconSight",
    href: "https://www.linkedin.com/posts/aadhithya-d_continuing-the-series-of-projects-today-activity-7282262352501055489-2Zst",
    dates: "Oct 2024 - Nov 2024",
    active: true,
    timeline: "4 Weeks",
    role: "Developer",
    teamSize: "3",
    overview: "FalconSight is an AI-powered drone-based emergency detection system that leverages deep learning, computer vision, and real-time video processing to identify critical situations such as human distress, SOS gestures, and emergency text signs. Designed for rapid response in inaccessible areas, FalconSight combines mini-drone technology with secure communication protocols for efficient surveillance and disaster management.",
    technologies: [
        "Deep Learning",
        "Computer Vision",
        "OCR",
        "Mini-Drone Technology",
        "Real-time Video Processing",
        "WiFi Modules",
        "Gesture Recognition"
    ],
    media: {
      type: "image",
      url: "/drone1_16x9.png",
      alt: "FalconSight Demo",
    },
    markdown:  `# FalconSight 🚀  
**An AI-powered drone-based emergency detection system**  

### Overview  
FalconSight revolutionizes emergency response by integrating **mini-drones** with **AI-driven computer vision** to detect emergencies in real-time. This system enhances **surveillance and disaster management**, ensuring rapid response in critical situations.  

### Key Features  
- **Real-time Video Processing**: High-speed data transmission for immediate analysis.  
- **Human Detection**: AI-driven deep learning models identify people in distress.  
- **SOS Gesture Recognition**: Temporal pattern matching enables accurate recognition of emergency signals.  
- **Text Detection (OCR)**: Reads and interprets emergency messages with advanced preprocessing.  
- **Mini-Drone Technology**: Lightweight drones equipped with HD cameras and WiFi modules.  
- **Secure Communication**: Ensures reliable transmission of critical data.  

### Why FalconSight?  
FalconSight bridges the gap in emergency response, offering an innovative **AI-powered aerial surveillance system** capable of identifying threats in real time. It is particularly effective in **disaster-stricken and remote areas** where conventional monitoring systems fail.  

### Prerequisites

- Python 3.7 or higher
- Flask, OpenCV, EasyOCR, and other dependencies listed in \`requirements.txt\`

### Getting Started

1. **Clone the repository**:
   \`\`\`bash
   git clone https://github.com/RAGAV203/Drone-Cam-Analysis.git
   cd Drone-Cam-Analysis
   \`\`\`

2. **Set up a virtual environment** (recommended):
   \`\`\`bash
   python -m venv venv
   source venv/bin/activate  # On Windows, use \`venv\Scripts\activate\`
   \`\`\`

3. **Install dependencies**:
   \`\`\`bash
   pip install -r requirements.txt
   \`\`\`

### Running the Application

1. **Start the Flask App**:
   \`\`\`bash
   python app.py
   \`\`\`

2. **Open your browser** and navigate to \`http://127.0.0.1:5000\` to access the app.

### Project Structure

- \`app.py\`: The main Flask application file that runs the server and sets up the routes.
- \`detector.py\`: Contains the core code for gesture detection using OpenCV and OCR using EasyOCR.
- \`requirements.txt\`: Lists all the dependencies required to run the application.

### Usage

1. **Gesture Detection & OCR Functionality**: The app detects various gestures from the overlay window on the **Analysis Region**. The \`detector.py\` file processes video frames and identifies gestures using OpenCV.
2. **To adjust the region to analyze:** Change the below line in \`app.py\` file
   \`\`\`bash
   scrcpy_bbox = {'top': 450, 'left': 600, 'width': 720, 'height': 320}  # Adjust to match screen setup
   \`\`\`

### Dependencies

This project uses the following libraries:
- **Flask**: To create the web server.
- **OpenCV**: For handling video and image processing.
- **EasyOCR**: For optical character recognition.
- **MSS**: Screen Recording.
  
### Installation

All dependencies are listed in \`requirements.txt\`. Run the following command to install them:
\`\`\`bash
pip install -r requirements.txt
\`\`\`
    `,
    links: [
      {
        type: "Website",
        href: "https://your-project-link.com",
        icon: "Globe", 
      },
    ],
} as const;
