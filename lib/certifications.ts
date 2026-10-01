export type Provider = "AWS" | "GCP" | "Azure";
export type CertificationLevel =
  | "Foundational"
  | "Associate"
  | "Professional";
export type Certification = {
  id: string;
  provider: Provider;
  name: string;
  code?: string;
  level: CertificationLevel;
  summary: string;
};

export const providers: Provider[] = ["AWS", "GCP", "Azure"];

export const certifications: Certification[] = [
  {
    id: "aws-cloud-practitioner",
    provider: "AWS",
    name: "Cloud Practitioner",
    code: "CLF-C02",
    level: "Foundational",
    summary:
      "Build a foundational understanding of AWS cloud concepts, services, security, and pricing.",
  },
  {
    id: "aws-solutions-architect-associate",
    provider: "AWS",
    name: "Solutions Architect – Associate",
    code: "SAA-C03",
    level: "Associate",
    summary:
      "Design cost-optimized, resilient, and secure architectures using AWS services.",
  },
  {
    id: "aws-developer-associate",
    provider: "AWS",
    name: "Developer – Associate",
    code: "DVA-C02",
    level: "Associate",
    summary:
      "Develop, deploy, and troubleshoot applications built on AWS.",
  },
  {
    id: "aws-solutions-architect-professional",
    provider: "AWS",
    name: "Solutions Architect – Professional",
    code: "SAP-C02",
    level: "Professional",
    summary:
      "Design complex, multi-account AWS architectures for demanding workloads.",
  },
  {
    id: "gcp-cloud-digital-leader",
    provider: "GCP",
    name: "Cloud Digital Leader",
    level: "Foundational",
    summary:
      "Explain cloud concepts and how Google Cloud products support business goals.",
  },
  {
    id: "gcp-associate-cloud-engineer",
    provider: "GCP",
    name: "Associate Cloud Engineer",
    level: "Associate",
    summary:
      "Deploy and operate workloads on Google Cloud using core services and tools.",
  },
  {
    id: "gcp-professional-cloud-architect",
    provider: "GCP",
    name: "Professional Cloud Architect",
    level: "Professional",
    summary:
      "Design secure, scalable, and highly available solutions across Google Cloud.",
  },
  {
    id: "gcp-professional-data-engineer",
    provider: "GCP",
    name: "Professional Data Engineer",
    level: "Professional",
    summary:
      "Design and operate data processing systems and machine learning workflows on Google Cloud.",
  },
  {
    id: "azure-fundamentals",
    provider: "Azure",
    name: "Azure Fundamentals",
    code: "AZ-900",
    level: "Foundational",
    summary:
      "Understand Azure cloud concepts, core services, security, governance, and pricing.",
  },
  {
    id: "azure-administrator",
    provider: "Azure",
    name: "Azure Administrator Associate",
    code: "AZ-104",
    level: "Associate",
    summary:
      "Manage identity, storage, compute, networking, and monitoring in Azure.",
  },
  {
    id: "azure-developer",
    provider: "Azure",
    name: "Azure Developer Associate",
    code: "AZ-204",
    level: "Associate",
    summary:
      "Build, deploy, and monitor cloud applications and services on Azure.",
  },
  {
    id: "azure-solutions-architect",
    provider: "Azure",
    name: "Azure Solutions Architect Expert",
    code: "AZ-305",
    level: "Professional",
    summary:
      "Design Azure infrastructure solutions that meet business, security, and resilience requirements.",
  },
];

export function getCertification(id: string | undefined) {
  return certifications.find((certification) => certification.id === id);
}
