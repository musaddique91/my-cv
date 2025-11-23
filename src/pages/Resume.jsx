import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Award, Globe, GraduationCap, Code, Download, Github } from 'lucide-react';

export default function Resume() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 py-8 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden relative">

        {/* Download PDF Button */}
        <a
          href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68d3f4b3dca7a2885450639f/0faa109d3_MUSADDIQUE_11_outllok.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
          className="absolute top-4 right-4 bg-green-600 hover:bg-blue-600 text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2 transition-all hover:scale-105 z-50"
        >
          <Download className="w-5 h-5" />          
        </a>

        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">MUSADDIQUE SANDERWALE</h1>
          <p className="text-xl md:text-2xl mb-6 text-blue-100">Senior Full Stack Engineer</p>

          <div className="flex flex-wrap gap-4 text-sm md:text-base">
            <a
              href="mailto:musaj91@outlook.com"
              className="flex items-center gap-2 hover:underline"
            >
              <Mail className="w-4 h-4" />
              <span>musaj91@outlook.com</span>
            </a>

            <a
              href="tel:+971558344946"
              className="flex items-center gap-2 hover:underline"
            >
              <Phone className="w-4 h-4" />
              <span>+971558344946</span>
            </a>

            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Dubai</span>
            </div>

            <a
              href="https://linkedin.com/in/ms-951a742a"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:underline"
            >
              <Linkedin className="w-4 h-4" />
              <span>linkedin.com/in/ms-951a742a</span>
            </a>

            <a
              href="https://github.com/musaddique91"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:underline"
            >
              <Github className="w-4 h-4" />
              <span>github.com/musaddique91</span>
            </a>
          </div>

        </div>

        <div className="p-8 md:p-12">

          {/* Summary */}
          <section className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">
              SUMMARY
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Accomplished Senior Full Stack Developer with <strong>11+ years of experience</strong> building scalable enterprise
              applications across fintech, cybersecurity, and telecom industries. Proven expertise in Java, Spring Boot,
              Angular, and AI integrations. Adept at microservices architecture, cloud deployments, and leading cross-functional
              teams to deliver secure, high-performance solutions. Looking to drive innovation in a technically challenging role.
            </p>
          </section>

          {/* Technical Skills */}
          <section className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">
              TECHNICAL SKILLS
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-slate-50 p-3 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-1 text-sm">Programming Languages:</h3>
                <p className="text-gray-700 text-sm">Java, Kotlin, Python</p>
              </div>

              <div className="bg-slate-50 p-3 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-1 text-sm">Web & Frontend:</h3>
                <p className="text-gray-700 text-sm">Angular, React, Tailwind, Angular Material</p>
              </div>

              <div className="bg-slate-50 p-3 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-1 text-sm">Backend Frameworks:</h3>
                <p className="text-gray-700 text-sm">Spring Boot, Cloud, Security, Batch, Spring Data JPA</p>
              </div>

              <div className="bg-slate-50 p-3 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-1 text-sm">Architecture & Patterns:</h3>
                <p className="text-gray-700 text-sm">Microservices, Reactive Programming</p>
              </div>

              <div className="bg-slate-50 p-3 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-1 text-sm">Messaging:</h3>
                <p className="text-gray-700 text-sm">RabbitMQ, Kafka</p>
              </div>

              <div className="bg-slate-50 p-3 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-1 text-sm">Databases & Caching:</h3>
                <p className="text-gray-700 text-sm">PostgreSQL, MySQL, SQL Server, MongoDB, Redis Cache</p>
              </div>

              <div className="bg-slate-50 p-3 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-1 text-sm">DevOps & Cloud:</h3>
                <p className="text-gray-700 text-sm">Docker, Kubernetes (K8s), Azure, OpenShift</p>
              </div>

              <div className="bg-slate-50 p-3 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-1 text-sm">Build & CI/CD:</h3>
                <p className="text-gray-700 text-sm">Maven, Git, Jenkins, Azure CI/CD Pipeline</p>
              </div>

              <div className="bg-slate-50 p-3 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-1 text-sm">AI/ML:</h3>
                <p className="text-gray-700 text-sm">Spring AI, Lang-chain, RAG</p>
              </div>

              <div className="bg-slate-50 p-3 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-1 text-sm">Others:</h3>
                <p className="text-gray-700 text-sm">Selenium, Cucumber, Junit, WireMock, GraphQL, Liquibase, Flowable</p>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">
              EXPERIENCE
            </h2>

            {/* Help AG */}
            <div className="mb-8 border-l-4 border-blue-600 pl-6">
              <div className="flex flex-col md:flex-row md:justify-between mb-2">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Help AG Middle East</h3>
                  <p className="text-sm text-red-600 font-medium">(e& Enterprise Company)</p>
                  <p className="text-blue-600 font-semibold">Senior Full Stack Engineer</p>
                </div>
                <span className="text-gray-600 font-medium text-sm">Dec 2022 – Present</span>
              </div>

              <h4 className="font-semibold text-gray-800 mt-3 mb-2">Cybersecurity Services:</h4>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                Cybersecurity Portal designed to provide Digital Risk Rating by aggregating issues from multiple
                systems, offering real-time insights into system security with DDoS alerts, alarms, and top talkers.
              </p>

              <div className="bg-blue-50 p-3 rounded mb-3">
                <p className="text-xs font-semibold text-gray-700 mb-1">Technologies Used:</p>
                <p className="text-xs text-gray-600">
                  Java 17, Angular-15, Spring Cloud, Microservices, Spring JPA, Junit, RabbitMQ, Kafka,
                  Flowable, Redis, Docker, Kubernetes, Azure, Selenium, Cucumber, Spring AI
                </p>
              </div>

              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Designed and implemented secured end-to-end REST APIs</li>
                <li>• Developed AI Search Engine using Spring AI (OpenAI and PGVector) to search for ticket based on user query</li>
                <li>• Set up a Spring Cloud Environment with service registry, gateway, and microservices</li>
                <li>• Integrated various systems: Ticketing System (ITSM, MSS_SDP, FortiSOAR), Security Alarm Systems (UPM), Arbor and UFM for DDoS alerts and TopTalker data</li>
                <li>• Worked on Integration of MISP Threat Advisory to display tactics and techniques based on categorized threat intelligence</li>
                <li>• Integrated Security Scorecard for comprehensive security metrics</li>
                <li>• Integrated Splunk for customer use cases by passing custom queries</li>
                <li>• Worked on RabbitMQ for internal messaging management</li>
                <li>• Design and Developed workflow approval processes with Flowable and Quartz for custom report scheduling</li>
                <li>• Create widgets and charts using HighCharts</li>
                <li>• Used Quartz for scheduling the workflow for customize report</li>
                <li>• Migrate spring boot 2.7.7 to Spring boot 3.3.2</li>
                <li>• Worked on Azure Key secret provider</li>
                <li>• Developed abstract components in Angular and Java</li>
                <li>• Utilized Kubernetes for creating config maps, services, deployments, and pods</li>
                <li>• Implemented code security using Snyk</li>
                <li>• Worked on PgVector db with langchain for FAQs chat bot</li>
                <li>• Maintain documentation for each feature in Azure Wiki</li>
              </ul>
            </div>

            {/* CRIF Solutions */}
            <div className="mb-8 border-l-4 border-blue-600 pl-6">
              <div className="flex flex-col md:flex-row md:justify-between mb-2">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">CRIF Solutions</h3>
                  <p className="text-blue-600 font-semibold">Full Stack Developer</p>
                </div>
                <span className="text-gray-600 font-medium text-sm">May 2017 – Dec 2022</span>
              </div>

              <h4 className="font-semibold text-gray-800 mt-3 mb-2">Credity (Italy):</h4>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                Credit management platform for B2B providing trust in financial data transformation with credit scoring.
              </p>

              <div className="bg-blue-50 p-3 rounded mb-3">
                <p className="text-xs font-semibold text-gray-700 mb-1">Technologies Used:</p>
                <p className="text-xs text-gray-600">
                  Java11, Kotlin, Angular-8, Spring Boot, Spring Cloud, Microservices, Spring Data JPA,
                  RabbitMQ, Redis Cache, GraphQL, Docker, OpenShift
                </p>
              </div>

              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• In this position, I design and implement end to end rest APIs</li>
                <li>• Setup Spring cloud environment for project with registry, gateway and other microservices</li>
                <li>• Worked on JWT token-based Spring Security to authenticate lenders</li>
                <li>• Integrated Data providers Sky minder, DNB, PB, Crif Burgel and CRIF CH</li>
                <li>• Integrated Insurance Providers Euler Hermes, Coface and Atradius</li>
                <li>• Added quartz job store cluster for more than 50+ jobs</li>
                <li>• Added Spring batch for Calculation of score, rating and attributes</li>
                <li>• Added Spring state machine for execution of processes</li>
                <li>• Added spring cloud stream with RabbitMQ as message broker</li>
                <li>• Re-design and improved the performance of the API to generate report for more than 1M transactions using spring reactive core</li>
                <li>• Create OpenShift config maps and deployment files for OpenShift</li>
                <li>• CI/CD automation using Jenkins</li>
                <li>• Work with team to solve the specification and coding issue</li>
                <li>• Discussion about requirement with BA</li>
                <li>• Changes in requirement-based on current structure and DB support</li>
                <li>• Adding/Upgrading of technologies in project</li>
                <li>• Integrated multitenant feature of Spring JPA by dynamic loading of data source based on client</li>
                <li>• Written Integration and unit test cases to verify the modules and ensure quality</li>
                <li>• Setup H2 dB for JUnit test cases with Mockito</li>
                <li>• Code review + branch management</li>
                <li>• Code coverage And Fortify scan</li>
              </ul>
            </div>

            {/* Perennial Systems */}
            <div className="mb-8 border-l-4 border-blue-600 pl-6">
              <div className="flex flex-col md:flex-row md:justify-between mb-2">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Perennial Systems</h3>
                  <p className="text-blue-600 font-semibold">Senior Associates</p>
                </div>
                <span className="text-gray-600 font-medium text-sm">Jan 2016 – May 2017</span>
              </div>

              <h4 className="font-semibold text-gray-800 mt-3 mb-2">Matchmove (Singapore):</h4>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                Embedded finance platform for virtual card issuance, wallet services, and payment gateway integration.
              </p>

              <div className="bg-blue-50 p-3 rounded mb-3">
                <p className="text-xs font-semibold text-gray-700 mb-1">Technologies Used:</p>
                <p className="text-xs text-gray-600">Java8, AngularJS, Spring MVC, Hibernate, ActiveMQ</p>
              </div>

              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Virtual Card System: Designed and developed APIs to issue, activate, suspend, and replace virtual prepaid and debit cards (Visa/MasterCard)</li>
                <li>• Payment Gateway Integration: Integrated with payment processors to support transaction authorization, 3D Secure, and fraud detection</li>
                <li>• Wallet Module: Built wallet services to support load, spend, refund, and peer-to-peer transfers, ensuring transactional integrity</li>
                <li>• Security Compliance: Implemented secure data handling and encryption in alignment with PCI-DSS standards</li>
                <li>• Developed a Cordova app to manage virtual card functionalities, including viewing card status, blocking/unblocking cards, and recharging cards through integrated payment gateways</li>
                <li>• Transaction Monitoring: Set up real-time event streaming via Kafka to log wallet and card activities</li>
                <li>• Documentation & Collaboration: Used Swagger/OpenAPI for API documentation and worked closely with product and compliance teams</li>
              </ul>
            </div>

            {/* Persistent Systems */}
            <div className="mb-8 border-l-4 border-blue-600 pl-6">
              <div className="flex flex-col md:flex-row md:justify-between mb-2">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Persistent Systems</h3>
                  <p className="text-blue-600 font-semibold">Software Engineer</p>
                </div>
                <span className="text-gray-600 font-medium text-sm">Oct 2013 – Dec 2016</span>
              </div>

              <h4 className="font-semibold text-gray-800 mt-3 mb-2">Cycle 30 Billing System (USA):</h4>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                Voice, video and data communication services with JBilling System for Accounts, Ordering, Invoices and payments.
              </p>

              <div className="bg-blue-50 p-3 rounded mb-3">
                <p className="text-xs font-semibold text-gray-700 mb-1">Technologies Used:</p>
                <p className="text-xs text-gray-600">Java6, JS, HTML, CSS, Spring MVC, Hibernate, ActiveMQ, Tomcat-8</p>
              </div>

              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• In this position, I worked as an individual developer</li>
                <li>• Created Entity classed for hibernate</li>
                <li>• Learn JBilling system in order to integrate into project</li>
                <li>• Added sync Cycle-30 products with JBilling</li>
                <li>• Created Schedulers in billing to calculates the cost</li>
                <li>• Junit test cases and code coverage</li>
              </ul>
            </div>
          </section>

          {/* Awards */}
          <section className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">
              AWARDS AND ACHIEVEMENTS
            </h2>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <Award className="w-5 h-5 text-blue-600" />
                  Awards
                </h3>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• You Made Difference</li>
                  <li>• Employee of the Year</li>
                  <li>• Star Performance</li>
                  <li>• Teamwork</li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-green-600" />
                  Business Visits
                </h3>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Bologna (Italy)</li>
                  <li>• Milan (Italy)</li>
                  <li>• Moscow (Russia)</li>
                </ul>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-purple-600" />
                  Certification
                </h3>
                <p className="text-gray-700 text-sm font-medium">
                  Caltech Post Graduate Program in AI and Machine Learning
                </p>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">
              EDUCATION
            </h2>

            <div className="space-y-3">
              <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-blue-600">
                <div className="flex flex-col md:flex-row md:justify-between">
                  <div>
                    <h3 className="font-bold text-gray-900">Bachelor of Engineering (IT)</h3>
                    <p className="text-gray-600 text-sm">Shivaji University</p>
                  </div>
                  <div className="text-right mt-2 md:mt-0">
                    <p className="text-blue-600 font-semibold text-sm">2010-2013</p>
                    <p className="text-gray-700 font-medium text-sm">68%</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-blue-600">
                <div className="flex flex-col md:flex-row md:justify-between">
                  <div>
                    <h3 className="font-bold text-gray-900">Diploma in IT</h3>
                    <p className="text-gray-600 text-sm">Government Polytechnic Pune</p>
                  </div>
                  <div className="text-right mt-2 md:mt-0">
                    <p className="text-blue-600 font-semibold text-sm">2007-2010</p>
                    <p className="text-gray-700 font-medium text-sm">77.10%</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-blue-600">
                <div className="flex flex-col md:flex-row md:justify-between">
                  <div>
                    <h3 className="font-bold text-gray-900">SSC</h3>
                    <p className="text-gray-600 text-sm">Hakim Ajmal Khan Urdu School</p>
                  </div>
                  <div className="text-right mt-2 md:mt-0">
                    <p className="text-blue-600 font-semibold text-sm">2007</p>
                    <p className="text-gray-700 font-medium text-sm">90.91%</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}