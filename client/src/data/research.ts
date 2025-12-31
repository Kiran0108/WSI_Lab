export type Patent = {
  title: string;
  inventors: string;
  status: string;
  date: string;
  applicationNo: string;
  publicationDate: string;
};

export const patents: Patent[] = [
  {
    title: "Method to Determine the Object’s Reflectivity Using sub-THz FMCW Radar",
    inventors: "Dr. Rupesh Kumar, Seelam Prasanna Kumar, Chandra Wadde, Pondala Venkata Ramana Murthy",
    status: "Published",
    date: "14-08-2024",
    publicationDate: "01-11-2024",
    applicationNo: "202441000001"
  },
  {
    title: "Method to Predict the Performance of Bandstop RF Filter Using Machine Learning Approach",
    inventors: "Seelam Prasanna Kumar, Dr. Rupesh Kumar, Gayatri Routhu, Kalle Venkatesh, Chakka Sai Sree",
    status: "Published",
    date: "28-08-2024",
    publicationDate: "08-11-2024",
    applicationNo: "202441000002"
  },
  {
    title: "Method to Enhance Reconstruction of FMCW SPARSE SAR Image",
    inventors: "Dr. Rupesh Kumar, Pondala Venkata Ramana Murthy, Chandra Wadde, Seelam Prasanna Kumar, Damarla Venkata Naga Sai Kiran",
    status: "Published",
    date: "13-08-2024",
    publicationDate: "11-10-2024",
    applicationNo: "202441000003"
  },
  {
    title: "Wireless Sensor-to-Spreadsheet Data Logging System",
    inventors: "Damarla Venkata Naga Sai Kiran, Seelam Prasanna Kumar, Dr. Rupesh Kumar, Dr. Harish Puppala",
    status: "Published",
    date: "16-07-2024",
    publicationDate: "18-10-2024",
    applicationNo: "202441000004"
  },
  {
    title: "Method to Assess and Store the Sensors Data Coupled with Geo-Information for IoT Applications",
    inventors: "Damarla Venkata Naga Sai Kiran, Seelam Prasanna Kumar, Dr. Rupesh Kumar, Perisetty Veera Venkata Lakshmi Sai Tanmay",
    status: "Published",
    date: "25-07-2024",
    publicationDate: "06-09-2024",
    applicationNo: "202441000005"
  },
  {
    title: "Next-Generation Reconfigurable Intelligent Surface for Improved 5.8 GHz ISM Band Connectivity",
    inventors: "B. Praveen Kitti, Ch. Monica, Prof. Rupesh Kumar",
    status: "Published",
    date: "27-06-2024",
    publicationDate: "25-10-2024",
    applicationNo: "202441000006"
  },
  {
    title: "Method to Predict the Radiation Pattern of Series Feed 1D Array Antenna at V-Band Frequency Range",
    inventors: "Dr. Rupesh Kumar, Gayatri Routhu, Ch. Monica, Praveen Kitti Burri",
    status: "Published",
    date: "06-09-2024",
    publicationDate: "25-10-2024",
    applicationNo: "202441000007"
  },
  {
    title: "Method to Predict the Design Specifications of Series Feed 1D Array Antenna at V-Band Frequency Ranges",
    inventors: "Gayatri Routhu, Dr. Rupesh Kumar",
    status: "Published",
    date: "21-09-2024",
    publicationDate: "09-10-2024",
    applicationNo: "202441000008"
  },
  {
    title: "Method to Characterize the Performance of 8×8 Array Antenna at V-Band Frequency Range",
    inventors: "Dr. Rupesh Kumar, Gayatri Routhu, Praveen Kitti Burri, Dr. Jatis Kumar Dash, Ch. Monica, Nagireddy Sravani, Sai Lakshmi Janga, Arshad Ahamed",
    status: "Published",
    date: "10-10-2024",
    publicationDate: "25-01-2025",
    applicationNo: "202541000010"
  },
  {
    title: "Method to Enhance Reconstruction of FMCW SPARSE SAR Image Using RMS Computation",
    inventors: "Pondala Venkata Ramana Murthy, Dr. Rupesh Kumar, C. Gokul, Chandra Wadde, Seelam Prasanna Kumar, Damarla Venkata Naga Sai Kiran",
    status: "Published",
    date: "11-10-2024",
    publicationDate: "01-11-2024",
    applicationNo: "202441000011"
  },
  {
    title: "Method to Auto Navigate Drone Based on Geo-Information for IoT Field-Data",
    inventors: "Pujari Sri Sai Manikanta, Dr. Rupesh Kumar, Ajit Kumar, Pondala Venkata Ramana Murthy",
    status: "Published",
    date: "28-09-2024",
    publicationDate: "01-11-2024",
    applicationNo: "202441000012"
  },
  {
    title: "Human Activity Classification as an Integrative Approach of SAR Technique with CGAN",
    inventors: "Gokul Chinnaraj, Dr. Rupesh Kumar, Pondala Venkata Ramana Murthy, Chandra Wadde",
    status: "Published",
    date: "07-11-2024",
    publicationDate: "22-11-2024",
    applicationNo: "202441000013"
  },
  {
    title: "System and Method for Autonomous Navigation of an Unmanned Aerial Vehicle",
    inventors: "Pujari Sri Sai Manikanta, Dr. Rupesh Kumar, Ajit Kumar, Pondala Venkata Ramana Murthy",
    status: "Published",
    date: "14-11-2024",
    publicationDate: "10-01-2025",
    applicationNo: "202541000014"
  },
  {
    title: "A Radar Imaging System for Generating a Reconstructed Image from Partial Scanning Data",
    inventors: "Pondala Venkata Ramana Murthy, Dr. Rupesh Kumar, C. Gokul, Chandra Wadde",
    status: "Published",
    date: "24-12-2024",
    publicationDate: "14-02-2025",
    applicationNo: "202541000015"
  },
  {
    title: "A System for Reconstructing SAR Images from FMCW Radar Signals",
    inventors: "Chandra Wadde, Dr. Rupesh Kumar, Alagara Baby Naga Vijaya Lakshmi, Sudha Gadvala",
    status: "Published",
    date: "04-03-2025",
    publicationDate: "16-05-2025",
    applicationNo: "202541000017"
  },
  {
    title: "Adaptive Heuristic and AI-Driven Optimization for Energy-Efficient Placement of ML Services in IoT Networks",
    inventors: "Mouli, Dr. Rupesh Kumar",
    status: "Published",
    date: "03-04-2025",
    publicationDate: "03-04-2025",
    applicationNo: "202541000018"
  }
];
export type Publication = { year: number; title: string; authors: string; journal: string; volume: string; pages: string; link: string; };
export const publications: Publication[] = [
  {
    year: 2025,
    title: "Automated Shape Classification Using SAR Imaging and Machine Learning",
    authors: "Chandra Wadde, Venkata Ramana Murthy Pondala, Gokul Chinnaraj, Mark Clemente-Arenas, Rupesh Kumar",
    journal: "2025 IEEE Space, Aerospace and Defence Conference (SPACE)",
    volume: "",
    pages: "",
    link: "https://ieeexplore.ieee.org/document/11171100"
  },
  {
    year: 2025,
    title: "Human Activity Classification as an Integrative Approach of SAR Technique with Conditional Generative Adversarial Network",
    authors: "Gokul Chinnaraj, Chandra Wadde, Venkata Ramana Murthy Pondala, Chakka Sai Sree, Rupesh Kumar, Vinod Bochu",
    journal: "2025 IEEE Space, Aerospace and Defence Conference (SPACE)",
    volume: "",
    pages: "",
    link: "https://ieeexplore.ieee.org/document/11170995"
  },
  {
    year: 2025,
    title: "Air-Quality Assessment by Integrating Sensors and Drone for IoT Application",
    authors: "Seelam Prasanna Kumar, Damarla Venkata Naga Sai Kiran, Pondala Venkata Ramana Murthy, Navya Sree Guttamukala, Harish Puppala, Rupesh Kumar",
    journal: "2025 IEEE Space, Aerospace and Defence Conference (SPACE)",
    volume: "",
    pages: "",
    link: "https://ieeexplore.ieee.org/document/11171420"
  },
  {
    year: 2025,
    title: "2D Antenna Array Design Using 4 × 4 Butler Matrix for X-Band Applications",
    authors: "Dhanesh Kumar Jallepalli, Seelam Prasanna Kumar, Rupesh Kumar",
    journal: "2025 IEEE Space, Aerospace and Defence Conference (SPACE)",
    volume: "",
    pages: "",
    link: "https://ieeexplore.ieee.org/document/11171300"
  },
  {
    year: 2025,
    title: "Compact Single-Layer Metasurface Absorber with Polarization Insensitivity and Wideband Characteristics",
    authors: "Monica Chatla, Praveen Kitti Burri, Gayatri Routhu, Sravani Nagireddy, Rupesh Kumar",
    journal: "2025 IEEE Space, Aerospace and Defence Conference (SPACE)",
    volume: "",
    pages: "",
    link: "https://ieeexplore.ieee.org/document/11170571"
  },
  {
    year: 2025,
    title: "Prediction of 1D Array Antenna at V-Band Using ANN Approach",
    authors: "Gayatri Routhu, Manas Sarkar, Rupesh Kumar",
    journal: "2025 IEEE Space, Aerospace and Defence Conference (SPACE)",
    volume: "",
    pages: "",
    link: "https://ieeexplore.ieee.org/document/11170898"
  },
  {
    year: 2025,
    title: "Study of 2D Terahertz SAR Imaging Based on FMCW Radar System",
    authors: "Chandra Wadde, Mark Clemente-Arenas, Sravani Nagireddy, Gayatri Routhu, Rupesh Kumar",
    journal: "2025 IEEE Space, Aerospace and Defence Conference (SPACE)",
    volume: "",
    pages: "",
    link: "https://ieeexplore.ieee.org/document/11170484"
  },
  {
    year: 2024,
    title: "Preliminary Analysis of mmWave SAR Model and Machine Learning Approach",
    authors: "Chandra Wadde, Gayatri Routhu, Rajesh Shankar Karvande",
    journal: "2024 IEEE Space, Aerospace and Defence Conference (SPACE)",
    volume: "",
    pages: "",
    link: "https://ieeexplore.ieee.org/document/10668181"
  },
  {
    year: 2024,
    title: "Modeling of mmWave FMCW Radar System for 2D SAR Imaging",
    authors: "Chandra Wadde, Rajesh Shankar Karvande, Rupesh Kumar",
    journal: "2024 IEEE Space, Aerospace and Defence Conference (SPACE)",
    volume: "",
    pages: "",
    link: "https://ieeexplore.ieee.org/document/10668200"
  },
  {
    year: 2024,
    title: "Optimized Configuration of an IRNSS S-Band Microstrip Patch Antenna",
    authors: "Shivam Bhutiani, Rupesh Kumar",
    journal: "2024 IEEE International Conference on Contemporary Computing and Communications (InC4)",
    volume: "",
    pages: "",
    link: "https://ieeexplore.ieee.org/document/10649149"
  }
];