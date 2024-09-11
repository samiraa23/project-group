import React, { useState } from 'react';

const faqs = [
  {
    question: 'What are the hospital visiting hours?',
    answer: 'Our visiting hours are from 8 AM to 8 PM, Monday to Sunday. However, visiting hours may differ for specific wards and departments.'
  },
  {
    question: 'Do I need an appointment to see a doctor?',
    answer: 'Yes, it is recommended to schedule an appointment before visiting the hospital to ensure that the doctor is available.'
  },
  {
    question: 'How can I pay for my treatment?',
    answer: 'We accept cash, credit cards, and most major health insurance plans. Please contact our billing department for specific information regarding payment options.'
  },
  {
    question: 'What should I bring for my hospital stay?',
    answer: 'You should bring identification, insurance information, a list of current medications, and personal toiletries. Valuables should be left at home.'
  },
  {
    question: 'Does the hospital offer emergency services?',
    answer: 'Yes, our hospital provides 24/7 emergency services. If you need urgent medical attention, please go to our emergency department.'
  },
  {
    question: 'Can I visit a patient if I am not a family member?',
    answer: 'Visitation policies may vary. Generally, friends can visit patients, but it is best to check with the hospital’s visitor policy to confirm specific rules and visiting hours.'
  },
  {
    question: 'How do I get my medical records?',
    answer: 'You can request your medical records by contacting the hospital’s medical records department. You may need to fill out a request form and provide identification.'
  },
  {
    question: 'Is there parking available at the hospital?',
    answer: 'Yes, the hospital provides parking facilities for patients and visitors. There may be fees associated with parking, so please check the parking information upon arrival.'
  },
  {
    question: 'Are there accommodations for out-of-town patients?',
    answer: 'Yes, we have arrangements with local hotels for out-of-town patients and their families. Contact our patient services for more details and recommendations.'
  },
  {
    question: 'What should I do if I have a complaint about my care?',
    answer: 'If you have a complaint, please contact our patient relations department. We take feedback seriously and are committed to resolving any issues to ensure the best care for our patients.'
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle open/close
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-4">
            <div
              onClick={() => handleToggle(index)}
              className="cursor-pointer flex justify-between items-center"
            >
              <h3 className="text-lg font-medium">{faq.question}</h3>
              <span className="text-gray-500">{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && (
              <div className="mt-2 text-gray-600">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
