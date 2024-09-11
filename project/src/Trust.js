import React from 'react';

const TrustInMedical = () => {
  const trustPoints = [
    {
      title: "Qualified Healthcare Professionals",
      description: `Hospitals employ licensed doctors, nurses, and specialists with extensive training. 
                    They adhere to professional standards and continuous education. 
                    Qualified staff ensures accurate diagnoses and appropriate treatments. 
                    Patients can rely on their expertise for complex medical issues. 
                    Trust is built when patients know they are in capable hands.`
    },
    {
      title: "Clear Communication",
      description: `Healthcare providers explain diagnoses, treatment options, and risks clearly. 
                    Effective communication helps patients make informed decisions. 
                    Hospitals prioritize patient education, ensuring understanding at every step. 
                    Open dialogue fosters transparency and reduces confusion. 
                    Patients trust when they feel well-informed about their care.`
    },
    {
      title: "Patient Safety Protocols",
      description: `Strict safety protocols are followed to minimize risks and infections. 
                    Hospitals maintain clean environments and use sterile equipment. 
                    Procedures like hand hygiene and regular disinfection are enforced. 
                    Emergency protocols ensure patient safety in critical situations. 
                    Trust is built when safety measures are visibly in place.`
    },
    {
      title: "Accreditation from Reputable Bodies",
      description: `Hospitals earn accreditation by meeting high healthcare standards. 
                    Reputable bodies like JCI and ISO assess hospital practices. 
                    Accreditation ensures continuous improvement in patient care. 
                    It also verifies that hospitals comply with regulatory guidelines. 
                    Patients trust accredited institutions for quality healthcare.`
    },
    {
      title: "Evidence-Based Treatments",
      description: `Treatments are based on the latest scientific research and clinical trials. 
                    Evidence-based medicine uses proven methods for optimal patient outcomes. 
                    Hospitals stay updated with advancements in medical science. 
                    This ensures that patients receive effective, up-to-date care. 
                    Trust grows when treatments are backed by solid evidence.`
    },
    {
      title: "Patient Involvement in Care",
      description: `Hospitals encourage patients to participate in their treatment decisions. 
                    Informed consent is sought before any major procedure. 
                    Patients’ preferences and values are considered in care plans. 
                    This collaborative approach increases patient satisfaction. 
                    Trust is built when patients feel they have a say in their health.`
    },
    {
      title: "Confidentiality and Privacy",
      description: `Strict policies protect patient privacy and medical records. 
                    Hospitals comply with laws like HIPAA to safeguard information. 
                    Confidentiality ensures that sensitive details are not shared without consent. 
                    Patients trust institutions that respect their privacy rights. 
                    Secure handling of data is a cornerstone of medical trust.`
    },
    {
      title: "Follow-up and Post-Care Support",
      description: `Hospitals provide follow-up appointments and care after treatment. 
                    Patients receive guidance for recovery and managing health post-discharge. 
                    Support ensures that complications are addressed early. 
                    Continuous care builds long-term trust with patients. 
                    Trust is earned when patients feel supported after leaving the hospital.`
    }
  ];

  return (
    <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-bold text-center mb-6">What Can We Trust in Medical?</h2>
      <ul className="space-y-6">
        {trustPoints.map((point, index) => (
          <li key={index} className="bg-blue-50 border-l-4 border-blue-500 text-blue-700 p-4 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
            <p className="text-sm leading-relaxed whitespace-pre-line">{point.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrustInMedical;
