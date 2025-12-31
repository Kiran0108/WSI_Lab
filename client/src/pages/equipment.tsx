import { Card, CardContent } from "@/components/ui/card";
import {
  Antenna,
  Cpu,
  Radar,
  Scan,
  Server,
  Layers,
  Settings,
  Database,
  Network
} from "lucide-react";

export default function Equipment() {

  const sections = [
    {
      title: "Radar & RF Systems",
      items: [
        {
          name: "77–81 GHz FMCW Radar Sensor",
          model: "TI IWR1843 BOOST",
          description: "High-resolution mmWave FMCW radar for imaging, tracking and object detection.",
          icon: Radar
        },
        {
          name: "24 GHz FMCW Radar Modules",
          model: "Infineon Position2Go & Sense2Go",
          description: "Short-range radar boards for distance, motion and position sensing.",
          icon: Radar
        },
        {
          name: "Software Defined Radio",
          model: "Analog Devices SDR (10 MHz – 6 GHz)",
          description: "Wideband SDR platform for prototyping wireless communication and radar systems.",
          icon: Server
        },
        {
          name: "High-Performance SDR Platform",
          model: "NI USRP X310",
          description: "Advanced MIMO SDR system for 5G/6G, radar and wireless experimentation.",
          icon: Network
        }
      ]
    },

    {
      title: "Measurement & Imaging Facilities",
      items: [
        {
          name: "Anechoic Chamber",
          model: "Up to 8 GHz",
          description: "Fully shielded RF test environment for antenna and radar characterization.",
          icon: Layers
        },
        {
          name: "2D Linear Scanner",
          model: "Precision Motion Platform",
          description: "Automated scanning system for synthetic aperture radar imaging and measurements.",
          icon: Scan
        }
      ]
    },

    {
      title: "Fabrication & Prototyping",
      items: [
        {
          name: "PCB Fabrication & UV Lithography Setup",
          model: "CopperCAM + Mach3 Mill",
          description: "In-house PCB prototyping and micro-fabrication for RF circuit development.",
          icon: Cpu
        }
      ]
    },

    {
      title: "Simulation & Software Tools",
      items: [
        {
          name: "Electromagnetic Simulation Suite",
          model: "CST Studio Suite",
          description: "Full-wave EM simulation for antennas, RF and microwave structures.",
          icon: Antenna
        },
        {
          name: "Signal Processing & Modeling Environment",
          model: "MATLAB",
          description: "Advanced modeling, simulation and data analysis for radar and AI research.",
          icon: Database
        },
        {
          name: "Embedded & Control Software",
          model: "Mach3 & Control Systems",
          description: "Control and automation software for experimental hardware integration.",
          icon: Settings
        }
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">

      <div className="max-w-3xl mb-14">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Laboratory Equipment</h1>
        <p className="text-xl text-muted-foreground">
          Comprehensive research infrastructure supporting advanced radar, RF, wireless and 6G technologies.
        </p>
      </div>

      {sections.map((section, si) => (
        <div key={si} className="mb-16">

          <h2 className="text-2xl font-semibold mb-8 text-primary">
            {section.title}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {section.items.map((item, i) => (
              <Card
                key={i}
                className="group hover:border-primary transition-colors"
              >
                <CardContent className="p-8">

                  <div className="h-14 w-14 bg-muted rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                    <item.icon className="h-7 w-7" />
                  </div>

                  <h3 className="text-xl font-bold mb-1">{item.name}</h3>

                  <div className="text-sm font-mono text-primary mb-3">
                    {item.model}
                  </div>

                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>

                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      ))}

    </div>
  );
}