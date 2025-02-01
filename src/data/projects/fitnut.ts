export const fitNut = {
    title: "FitNut",
    href: "https://your-project-link.com",
    dates: "2024",
    active: true,
    timeline: "Ongoing",
    role: "Lead Developer",
    teamSize: "4",
    overview: "FitNut is a Flutter-based fitness application that uses MLKit for real-time pose detection, accurately counting reps, scoring workouts, and updating a leaderboard to enhance motivation.",
    technologies: [
        "Flutter",
        "MLKit",
        "Firebase",
        "Dart",
        "Google Cloud Platform"
    ],
    media: {
      type: "image",
      url: "/fitnut_16x9.png",
      alt: "FitNut App UI",
    },
    markdown:  `
# FitNut 🏋️‍♂️  

**An AI-powered fitness app with real-time pose detection and rep counting.**  

## Overview  
FitNut is a **Flutter-based fitness application** that uses **MLKit for real-time pose detection**. The app tracks workout repetitions, assigns scores based on accuracy and performance, and updates a leaderboard to keep users motivated.  

## 📸 Screenshots  
![Screenshot 1](/fitnut1.png)

## 🚀 Requirements  
- Flutter SDK  
- Android Studio or VS Code with Flutter Extension  
- Android/iOS device with camera support  
- Google Cloud Console account for MLKit APIs  

## 🔧 Installation  
1. Clone the repository.  
2. Set up Google Cloud Console and create a new project.  
3. Enable MLKit APIs and obtain an API key.  
4. Configure Flutter development environment.  
5. Connect an Android/iOS device.  
6. Add MLKit API key to the project.  
7. Run the application on your device.  

## 🔥 Features  
- **Real-time Pose Detection**: Uses MLKit to track and analyze workout form.  
- **Automatic Rep Counting**: Detects and counts repetitions with high accuracy.  
- **Performance-Based Scoring**: Assigns a score based on posture precision.  
- **Leaderboard System**: Users can compete with friends and track progress.  

## 👨‍💻 Contributors  
This project was created by:  
- [Aadhithya D](https://github.com/Aadhithya-D)  
- [Adithya S](https://github.com/Adithya-Sakaray)  
- [Thiruvikraman A](https://github.com/Thiruvikraman07)  
- [Sanjaii Vijayakumar](https://github.com/sanjaiiv04)  

📍 **Live Demo & Source Code**: [Check it out here](https://your-project-link.com)  
    `,
    links: [
      {
        type: "Website",
        href: "https://your-project-link.com",
        icon: "Globe", 
      },
    ],
} as const;
