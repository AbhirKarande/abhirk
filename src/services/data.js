export const data = {
    firstName: "Abhir", 
    lastName: "Karande",
    headline: "Computer Science Student", 
    profilePic: "AbhirKarandePhoto.jpg",
    github: "https://github.com/AbhirKarande",
    linkedin: "https://www.linkedin.com/in/abhirkarande/",
};

const githubRepos = {
    SeaLevelRisePrediction: "https://github.com/AbhirKarande/SeaLevelRisePrediction",
    HumanoidRobotObjectRecognition: "https://github.com/AbhirKarande/NAOobjectRecognition",
    SentimentAndWordCommonalityTool: "https://github.com/AbhirKarande/SentimentAndWordCommonalityToolTool",
    NewsImpact: "https://github.com/AbhirKarande/socialimpact-webapp",
    NLPModelComparison: "https://github.com/AbhirKarande/NLPModelComparison",

};
export const projects = [
    {
        title: "Sea Level Rise Forecasting Model",
        imageURL: "SeaLevelRisePrediction.PNG",
        websiteURL: githubRepos.SeaLevelRisePrediction,
        description:
                "Time series and multiple regression models for short and long term water level prediction.",
        technology: "R",
        githubURL: githubRepos.SeaLevelRisePrediction,
    },
    {
        title: "Object Detection with a Humanoid Robot",
        imageURL: "HumanoidRobotObjectDetection.JPEG",
        websiteURL: githubRepos.HumanoidRobotObjectRecognition,
        description:
                "Convolutional neural network and image processing to enable the NAO Robot to detect and classify objects.",
        technology: "Python, MatLab, PIL",
        githubURL: githubRepos.HumanoidRobotObjectRecognition,                
    },
    {
        title: "Sentiment and Word Commonality Tool",
        imageURL: "SentimentAndWordCommonalityTool.png",
        websiteURL: githubRepos.SentimentAndWordCommonalityTool,
        description:
                "Provides a sentiment percentage breakdown and word frequency for inputted text.",
        technology: "Java",
        githubURL: githubRepos.SentimentAndWordCommonalityTool,
    },
    {
        title: "Current News Headlines Web App",
        imageURL: "NewsImpact.jpg",
        websiteURL: githubRepos.NewsImpact,
        description:
                "Fetches news headlines from different sources. Currently set to 2020 US Election.",
        technology: "ReactJS, Javascript, HTML, CSS, NewsAPI",
        githubURL: githubRepos.NewsImpact,
    },
    {
        title: "Natural Language Processing Model Comparison",
        imageURL: "NLPmodelComparison.png",
        websiteURL: githubRepos.NLPModelComparison,
        description:
                "A comparison of deep-learning, machine-learning, and rule-based lexicon models in the classification of consumer sentiments.",
        technology: "Python, TensorFlow, SKLearn, NLTK",
        githubURL: githubRepos.NLPModelComparison,
    },

];
export const skills = [
	{
		name: "Python",
    },
    {
        name: "Java",
    },
    {
        name: "R"
    },
	{
		name: "JavaScript",
	},
	{
		name: "React",
    },
    {
        name: "Angular",
    },
	{
		name: "CSS",
	},
	{
		name: "HTML",
    },
    {
        name: "SQL",
    },
    {
        name: "PHP",
    },
	
];

export const contactItems = [
	{
		href: data.linkedin,
        icon: "fa fa-linkedin",
        image: "<LinkedInIcon />",
		text: "LinkedIn",
	},
	{
		href: data.github,
        icon: "fa fa-github",
        image: "<GitHubIcon />",
		text: "GitHub",
	},
];


export const blogPosts = [
	
];