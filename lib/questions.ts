export type Question = {
  id: string;
  certificationId: string;
  domain: string;
  prompt: string;
  options: [string, string, string, string];
  answerIndex: 0 | 1 | 2 | 3;
  explanation: string;
};

export type ExamQuestion = Pick<
  Question,
  "id" | "domain" | "prompt" | "options"
>;

export const EXAM_QUESTION_COUNT = 8;
export const EXAM_DURATION_MINUTES = 12;

type QuestionSeed = Omit<Question, "id" | "certificationId">;

const questionSeeds: Record<string, QuestionSeed[]> = {
  "aws-cloud-practitioner": [
    {
      domain: "Cloud Concepts",
      prompt:
        "A company needs its application to remain available if one data center fails. Which AWS design choice best addresses this?",
      options: [
        "Deploy across multiple Availability Zones in one Region",
        "Store all application files in one EC2 instance",
        "Use one subnet in one Availability Zone",
        "Move the application to a second account in the same data center",
      ],
      answerIndex: 0,
      explanation:
        "Availability Zones are isolated locations within a Region, so deploying across them helps an application tolerate a single-zone failure.",
    },
    {
      domain: "Cloud Concepts",
      prompt:
        "An online shop's traffic doubles during a short sale and then returns to normal. Which cloud benefit lets it adjust capacity to demand?",
      options: [
        "Fixed capacity planning",
        "Elasticity",
        "Hardware depreciation",
        "Manual data classification",
      ],
      answerIndex: 1,
      explanation:
        "Elasticity lets resources scale up or down as demand changes, avoiding a permanently oversized environment.",
    },
    {
      domain: "Cloud Concepts",
      prompt:
        "Why can moving a variable workload from owned servers to AWS reduce upfront expense?",
      options: [
        "AWS removes the need to protect data",
        "AWS guarantees that every workload costs less",
        "The customer can consume resources without purchasing data-center hardware first",
        "The customer no longer pays for any compute usage",
      ],
      answerIndex: 2,
      explanation:
        "Cloud consumption avoids the initial capital purchase of servers and facilities, although usage still has a cost.",
    },
    {
      domain: "Security and Compliance",
      prompt:
        "A workload runs on Amazon EC2. Who is responsible for applying security patches to its guest operating system?",
      options: [
        "AWS only",
        "The software vendor only",
        "The AWS account's billing contact",
        "The customer",
      ],
      answerIndex: 3,
      explanation:
        "For EC2, customers manage the guest operating system, including its security patches, while AWS manages the underlying infrastructure.",
    },
    {
      domain: "Security and Compliance",
      prompt:
        "Which control adds a second verification factor when an administrator signs in to the AWS console?",
      options: [
        "Multi-factor authentication",
        "A public S3 bucket policy",
        "A larger EC2 instance",
        "A Route 53 health check",
      ],
      answerIndex: 0,
      explanation:
        "Multi-factor authentication requires an additional factor beyond the password, improving protection against stolen credentials.",
    },
    {
      domain: "Security and Compliance",
      prompt:
        "An application needs read-only access to one S3 bucket. Which approach follows least privilege?",
      options: [
        "Share the root user's password with the application",
        "Grant an IAM role only the required read actions on that bucket",
        "Attach administrator access to every user",
        "Make the bucket public",
      ],
      answerIndex: 1,
      explanation:
        "A narrowly scoped IAM role grants only the actions and resource access the application needs.",
    },
    {
      domain: "Cloud Technology and Services",
      prompt:
        "Which AWS service is designed to store and retrieve objects such as images, backups, and documents?",
      options: [
        "Amazon RDS",
        "Amazon VPC",
        "Amazon S3",
        "AWS CloudTrail",
      ],
      answerIndex: 2,
      explanation:
        "Amazon S3 is an object storage service used for durable storage of files and other unstructured data.",
    },
    {
      domain: "Cloud Technology and Services",
      prompt:
        "A company needs a managed relational database for an application. Which service is the best fit?",
      options: [
        "Amazon CloudFront",
        "AWS Identity and Access Management",
        "Amazon SQS",
        "Amazon RDS",
      ],
      answerIndex: 3,
      explanation:
        "Amazon RDS manages relational database engines and common database administration tasks.",
    },
    {
      domain: "Cloud Technology and Services",
      prompt:
        "Which service runs code in response to events without requiring the customer to manage servers?",
      options: [
        "AWS Lambda",
        "Amazon EBS",
        "AWS Direct Connect",
        "Amazon Route 53",
      ],
      answerIndex: 0,
      explanation:
        "AWS Lambda runs event-driven code while AWS manages the compute infrastructure.",
    },
    {
      domain: "Billing, Pricing, and Support",
      prompt:
        "A team wants to visualize AWS spending trends and identify which services contributed to recent costs. Which tool should it use?",
      options: [
        "AWS Artifact",
        "AWS Cost Explorer",
        "Amazon Inspector",
        "AWS CloudFormation",
      ],
      answerIndex: 1,
      explanation:
        "AWS Cost Explorer provides reports and visualizations for analyzing historical and forecasted costs.",
    },
  ],
  "aws-solutions-architect-associate": [
    {
      domain: "Design Resilient Architectures",
      prompt:
        "A production database must fail over automatically if its primary Availability Zone becomes unavailable. Which Amazon RDS option meets this requirement?",
      options: [
        "A Multi-AZ deployment",
        "A read replica in the same Availability Zone",
        "A manual daily snapshot",
        "A single-AZ instance with a larger storage volume",
      ],
      answerIndex: 0,
      explanation:
        "An RDS Multi-AZ deployment maintains a standby in another Availability Zone and supports automatic failover.",
    },
    {
      domain: "Design Resilient Architectures",
      prompt:
        "A stateless web tier must scale across two Availability Zones behind one endpoint. Which design is most appropriate?",
      options: [
        "One EC2 instance with an Elastic IP",
        "An Application Load Balancer and an Auto Scaling group spanning both zones",
        "One EC2 instance per subnet with no health checks",
        "A single NAT gateway serving as the application endpoint",
      ],
      answerIndex: 1,
      explanation:
        "A load balancer distributes requests across healthy instances, and a multi-zone Auto Scaling group replaces or adds capacity.",
    },
    {
      domain: "Design Resilient Architectures",
      prompt:
        "A global audience repeatedly downloads large static files from an S3 website. Which solution can reduce viewer latency and origin requests?",
      options: [
        "Put the files on one EC2 instance",
        "Use an EBS snapshot as the website endpoint",
        "Store the site in S3 and distribute it through CloudFront",
        "Place the origin database in a public subnet",
      ],
      answerIndex: 2,
      explanation:
        "CloudFront caches S3-backed content at edge locations, reducing viewer latency and repeated requests to the origin.",
    },
    {
      domain: "Design Secure Architectures",
      prompt:
        "A company must encrypt S3 objects at rest and audit use of its encryption keys. Which option best satisfies both requirements?",
      options: [
        "Use an unencrypted bucket with a public access block",
        "Encrypt files only after downloading them",
        "Use client-side compression without encryption",
        "Use SSE-KMS with a customer-managed KMS key",
      ],
      answerIndex: 3,
      explanation:
        "SSE-KMS encrypts objects at rest and AWS KMS records key usage for auditing.",
    },
    {
      domain: "Design Secure Architectures",
      prompt:
        "An application on EC2 needs temporary access to read from one S3 bucket. How should credentials be supplied?",
      options: [
        "Attach a least-privilege IAM role to the instance",
        "Store long-lived access keys in the source code",
        "Place the root account credentials in user data",
        "Make the bucket readable by everyone",
      ],
      answerIndex: 0,
      explanation:
        "An instance profile provides temporary credentials for an IAM role without storing long-lived secrets on the instance.",
    },
    {
      domain: "Design Secure Architectures",
      prompt:
        "A private S3 origin should be reachable only through its CloudFront distribution. Which configuration is appropriate?",
      options: [
        "Allow anonymous access to every object",
        "Use CloudFront Origin Access Control and restrict the bucket policy to that distribution",
        "Place the bucket in a public subnet",
        "Disable bucket policies and use a public ACL",
      ],
      answerIndex: 1,
      explanation:
        "Origin Access Control lets CloudFront sign origin requests so the bucket can deny direct public access.",
    },
    {
      domain: "Design High-Performing Architectures",
      prompt:
        "Users around the world repeatedly download the same large static files. Which service can reduce latency and origin traffic?",
      options: [
        "AWS CloudTrail",
        "Amazon SQS",
        "Amazon CloudFront",
        "AWS Config",
      ],
      answerIndex: 2,
      explanation:
        "CloudFront caches content near viewers and serves repeated requests without fetching every copy from the origin.",
    },
    {
      domain: "Design High-Performing Architectures",
      prompt:
        "A bursty image-processing workload can run asynchronously, and the processing code is short-lived. Which design decouples uploads from processing?",
      options: [
        "A single oversized EC2 instance polling a local file",
        "A synchronous call from each user to the image processor",
        "A database trigger that starts a manual deployment",
        "S3 event notifications to SQS with Lambda consumers",
      ],
      answerIndex: 3,
      explanation:
        "S3 events and SQS decouple arrivals from processing, while Lambda can scale consumers with the queued work.",
    },
    {
      domain: "Design Cost-Optimized Architectures",
      prompt:
        "Application logs must be retained for years but are rarely accessed after the first month. Which S3 approach lowers storage cost?",
      options: [
        "Use lifecycle rules to transition older objects to an archival storage class",
        "Keep every object in S3 Standard indefinitely",
        "Copy all logs to larger EC2 instance disks",
        "Replicate all logs to a second S3 Standard bucket",
      ],
      answerIndex: 0,
      explanation:
        "S3 lifecycle rules can transition aging objects to lower-cost archival storage when their access pattern allows it.",
    },
    {
      domain: "Design Cost-Optimized Architectures",
      prompt:
        "A stable production workload runs continuously and can commit to a consistent compute spend. Which purchase option can reduce its EC2 cost?",
      options: [
        "On-Demand Capacity Reservations only",
        "A Compute Savings Plan",
        "Spot Instances for every stateful database",
        "Dedicated Hosts for all instances",
      ],
      answerIndex: 1,
      explanation:
        "A Compute Savings Plan offers discounted rates in exchange for a commitment to a consistent amount of eligible compute usage.",
    },
  ],
  "aws-developer-associate": [
    {
      domain: "Development with AWS Services",
      prompt:
        "A DynamoDB update should succeed only if the stored version still matches the version a client read. Which feature should the developer use?",
      options: [
        "A condition expression on the update",
        "A public read policy",
        "A table deletion protection setting",
        "A DynamoDB global table replica",
      ],
      answerIndex: 0,
      explanation:
        "A condition expression makes the write conditional on the item still having the expected version.",
    },
    {
      domain: "Development with AWS Services",
      prompt:
        "A worker queue must preserve message order within each customer workflow. Which Amazon SQS option should be used?",
      options: [
        "A standard queue with random polling",
        "A FIFO queue with a message group ID per workflow",
        "An S3 bucket notification without a queue",
        "An SNS topic with no subscription",
      ],
      answerIndex: 1,
      explanation:
        "SQS FIFO preserves order within a message group, allowing separate workflows to progress independently.",
    },
    {
      domain: "Security",
      prompt:
        "A Lambda function needs a database password that operators rotate regularly. Where should the function retrieve the secret?",
      options: [
        "A hard-coded source constant",
        "An unencrypted deployment artifact",
        "AWS Secrets Manager",
        "A public S3 object",
      ],
      answerIndex: 2,
      explanation:
        "Secrets Manager stores credentials securely and supports rotation integrations for managed databases.",
    },
    {
      domain: "Security",
      prompt:
        "A mobile application needs managed user sign-up and authentication without storing user passwords in its own database. Which service fits?",
      options: [
        "AWS CloudTrail",
        "Amazon Route 53",
        "AWS Config",
        "Amazon Cognito user pools",
      ],
      answerIndex: 3,
      explanation:
        "Cognito user pools provide managed user directories and authentication flows for applications.",
    },
    {
      domain: "Deployment",
      prompt:
        "A team wants to shift application traffic gradually to a new EC2 deployment and automatically roll back on failed health checks. Which service supports this?",
      options: [
        "AWS CodeDeploy with a deployment configuration and alarms",
        "AWS Budgets with a monthly report",
        "Amazon Inspector with no deployment integration",
        "AWS Artifact with a compliance download",
      ],
      answerIndex: 0,
      explanation:
        "CodeDeploy supports traffic shifting for supported deployment types and can use alarms to stop or roll back unhealthy deployments.",
    },
    {
      domain: "Deployment",
      prompt:
        "A team wants to define Lambda functions, API Gateway resources, and permissions in one deployable template. Which tool is designed for this workflow?",
      options: [
        "Amazon Macie",
        "AWS Serverless Application Model",
        "Amazon CloudWatch Logs Insights",
        "AWS Trusted Advisor",
      ],
      answerIndex: 1,
      explanation:
        "AWS SAM extends CloudFormation with abstractions for defining and deploying serverless applications.",
    },
    {
      domain: "Troubleshooting and Optimization",
      prompt:
        "A Lambda function fails intermittently and its execution logs are needed for diagnosis. Where should the developer inspect them by default?",
      options: [
        "AWS Cost Explorer",
        "Amazon VPC route tables",
        "Amazon CloudWatch Logs",
        "AWS Organizations",
      ],
      answerIndex: 2,
      explanation:
        "Lambda sends function logs to CloudWatch Logs when its execution role has the required permissions.",
    },
    {
      domain: "Troubleshooting and Optimization",
      prompt:
        "A distributed request crosses API Gateway, Lambda, and downstream services, and the team needs to locate a latency bottleneck. Which service provides request traces?",
      options: [
        "AWS Artifact",
        "AWS Budgets",
        "Amazon ECR",
        "AWS X-Ray",
      ],
      answerIndex: 3,
      explanation:
        "AWS X-Ray traces requests across instrumented services and helps identify latency segments and errors.",
    },
    {
      domain: "Troubleshooting and Optimization",
      prompt:
        "A DynamoDB table is throttling writes for one tenant while other tenants have spare capacity. Which change is most likely to help?",
      options: [
        "Choose a partition key that distributes that tenant's writes across more partition keys",
        "Increase the Lambda timeout without changing the write pattern",
        "Move the table to a public subnet",
        "Disable conditional writes across the whole application",
      ],
      answerIndex: 0,
      explanation:
        "A hot partition key concentrates traffic; distributing writes across keys can spread load across partitions.",
    },
    {
      domain: "Development with AWS Services",
      prompt:
        "An API needs to validate signed-in users before forwarding requests to a Lambda backend. Which API Gateway capability can perform this check?",
      options: [
        "An S3 lifecycle rule",
        "An authorizer",
        "An EBS volume attachment",
        "A CloudTrail trail",
      ],
      answerIndex: 1,
      explanation:
        "API Gateway authorizers validate credentials or tokens before allowing requests to reach the integration.",
    },
  ],
  "aws-solutions-architect-professional": [
    {
      domain: "Design Solutions for Organizational Complexity",
      prompt:
        "A multi-account organization must prevent member accounts from using services outside an approved list, even if an account administrator grants them access. Which control is appropriate?",
      options: [
        "An AWS Organizations service control policy",
        "An IAM inline policy that grants administrator access",
        "A security group allowing all traffic",
        "An S3 lifecycle rule",
      ],
      answerIndex: 0,
      explanation:
        "An SCP sets the maximum permissions available to principals in member accounts and does not grant permissions by itself.",
    },
    {
      domain: "Design Solutions for Organizational Complexity",
      prompt:
        "Several accounts in one Region need private connectivity to shared services and to each other with centralized routing. Which architecture is a strong fit?",
      options: [
        "A separate public NAT gateway in every subnet",
        "A shared AWS Transit Gateway with centrally managed attachments and routes",
        "An internet gateway attached to every workload VPC",
        "A single VPC peering connection between every pair of accounts",
      ],
      answerIndex: 1,
      explanation:
        "Transit Gateway provides a hub for routing between many VPCs and on-premises networks without a full mesh of peerings.",
    },
    {
      domain: "Design Solutions for Organizational Complexity",
      prompt:
        "A platform team must deploy a standard CloudFormation baseline to many accounts and Regions. Which capability best automates this?",
      options: [
        "An S3 static website",
        "A Route 53 hosted zone",
        "CloudFormation StackSets with delegated administration",
        "A single manually launched EC2 instance",
      ],
      answerIndex: 2,
      explanation:
        "StackSets can centrally deploy CloudFormation stacks across accounts and Regions, including through delegated administration.",
    },
    {
      domain: "Design for New Solutions",
      prompt:
        "A global application needs a multi-Region NoSQL database with local read and write access in each participating Region. Which service supports this pattern?",
      options: [
        "Amazon EBS Multi-Attach",
        "Amazon RDS for MySQL in one Availability Zone",
        "Amazon SQS standard queues",
        "Amazon DynamoDB global tables",
      ],
      answerIndex: 3,
      explanation:
        "DynamoDB global tables replicate data across Regions and support local reads and writes in each replica Region.",
    },
    {
      domain: "Design for New Solutions",
      prompt:
        "A SaaS platform must route domain events to multiple consumers with different filtering rules while keeping producers decoupled. Which service is the best event bus?",
      options: [
        "Amazon EventBridge",
        "Amazon EBS",
        "AWS Direct Connect",
        "AWS Certificate Manager",
      ],
      answerIndex: 0,
      explanation:
        "EventBridge routes events to multiple targets using rules, allowing producers and consumers to remain loosely coupled.",
    },
    {
      domain: "Design for New Solutions",
      prompt:
        "A workload needs a warm relational database copy in another Region and a tested recovery process for regional failures. Which architecture is most suitable?",
      options: [
        "One RDS instance with a daily snapshot in the same Region",
        "A cross-Region read replica with a tested promotion and application failover process",
        "An EC2 instance storing the only database copy on instance store",
        "A Multi-AZ deployment confined to the primary Region",
      ],
      answerIndex: 1,
      explanation:
        "A cross-Region read replica provides a warm recovery copy that can be promoted when the primary Region is unavailable.",
    },
    {
      domain: "Continuous Improvement for Existing Solutions",
      prompt:
        "A company has steady baseline compute use plus unpredictable bursts and wants to optimize discounts without overcommitting. What is a sound first step?",
      options: [
        "Move every workload to Dedicated Hosts",
        "Replace all databases with Spot Instances",
        "Analyze usage with Cost Explorer and Compute Optimizer before choosing a Savings Plan commitment",
        "Purchase the maximum possible Savings Plan term immediately",
      ],
      answerIndex: 2,
      explanation:
        "Usage analysis helps distinguish stable eligible consumption from bursts before the company commits to a discounted spend level.",
    },
    {
      domain: "Continuous Improvement for Existing Solutions",
      prompt:
        "A team wants safer releases for a critical service with an automated rollback when canary metrics degrade. Which deployment pattern should it adopt?",
      options: [
        "Replace all instances at once without a health check",
        "Disable monitoring during deployment",
        "Copy binaries manually to production hosts",
        "Use a canary or blue/green rollout with CloudWatch alarms and rollback",
      ],
      answerIndex: 3,
      explanation:
        "A gradual rollout limits exposure, and CloudWatch alarms can trigger rollback when service metrics exceed thresholds.",
    },
    {
      domain: "Accelerate Workload Migration and Modernization",
      prompt:
        "Before migrating a large application portfolio, a team needs to discover servers and map dependencies to plan waves. Which AWS service can collect this inventory?",
      options: [
        "AWS Application Discovery Service",
        "AWS Shield Advanced",
        "Amazon CloudFront",
        "AWS Backup",
      ],
      answerIndex: 0,
      explanation:
        "Application Discovery Service collects on-premises server and utilization data that supports migration planning.",
    },
    {
      domain: "Accelerate Workload Migration and Modernization",
      prompt:
        "A relational database must move to AWS with minimal downtime and ongoing source changes replicated during cutover. Which service is designed for this?",
      options: [
        "Amazon CloudWatch",
        "AWS Database Migration Service with change data capture",
        "AWS Config",
        "Amazon Inspector",
      ],
      answerIndex: 1,
      explanation:
        "AWS DMS can perform an initial load and replicate ongoing changes with CDC so the final cutover can be brief.",
    },
  ],
  "gcp-cloud-digital-leader": [
    {
      domain: "Digital Transformation with Google Cloud",
      prompt:
        "A retailer wants to test a new digital service quickly without purchasing servers before demand is known. Which cloud capability best supports this goal?",
      options: [
        "Self-managed hardware procurement",
        "Long-term fixed capacity planning",
        "On-demand access to scalable services",
        "Manual replacement of local disks",
      ],
      answerIndex: 0,
      explanation:
        "On-demand cloud services let an organization experiment and scale without first buying fixed infrastructure.",
    },
    {
      domain: "Digital Transformation with Google Cloud",
      prompt:
        "A business wants to replace a large upfront infrastructure purchase with costs that follow actual resource consumption. Which cloud characteristic helps?",
      options: [
        "A single fixed-capacity data center",
        "Consumption-based pricing",
        "Manual server depreciation",
        "A requirement to buy all capacity in advance",
      ],
      answerIndex: 1,
      explanation:
        "Consumption-based pricing aligns spending with resource use instead of requiring an upfront purchase of all capacity.",
    },
    {
      domain: "Exploring Data Transformation with Google Cloud",
      prompt:
        "Analysts need to run SQL over large datasets stored in a managed analytics warehouse. Which Google Cloud service is designed for this?",
      options: [
        "Cloud DNS",
        "Cloud Run",
        "BigQuery",
        "Cloud VPN",
      ],
      answerIndex: 2,
      explanation:
        "BigQuery is Google Cloud's managed analytics data warehouse for SQL analysis at scale.",
    },
    {
      domain: "Innovating with Google Cloud Artificial Intelligence",
      prompt:
        "A company wants a managed environment to build, train, and deploy machine-learning models. Which Google Cloud product is the most direct fit?",
      options: [
        "Cloud NAT",
        "Cloud Storage Transfer Service",
        "Cloud Armor",
        "Vertex AI",
      ],
      answerIndex: 3,
      explanation:
        "Vertex AI provides managed tools for the machine-learning development lifecycle.",
    },
    {
      domain: "Modernize Infrastructure and Applications with Google Cloud",
      prompt:
        "A team packages a web service in containers and wants Google Cloud to manage the Kubernetes control plane. Which service should it consider?",
      options: [
        "Google Kubernetes Engine",
        "Cloud Billing",
        "BigQuery",
        "Cloud Key Management Service",
      ],
      answerIndex: 0,
      explanation:
        "Google Kubernetes Engine is the managed Kubernetes service for running containerized applications.",
    },
    {
      domain: "Trust and Security with Google Cloud",
      prompt:
        "An administrator wants to grant a colleague permission to manage one project's resources without giving access across the organization. What is the best approach?",
      options: [
        "Share the administrator's password",
        "Grant an appropriate IAM role at the project scope",
        "Make the project's resources public",
        "Create a second billing account",
      ],
      answerIndex: 1,
      explanation:
        "Project-scoped IAM roles grant the needed permissions while limiting access to the intended project.",
    },
    {
      domain: "Scaling with Google Cloud Operations",
      prompt:
        "Operations staff need to collect service metrics, create dashboards, and alert on thresholds. Which capability should they use?",
      options: [
        "Cloud Translation",
        "Cloud Build",
        "Cloud Monitoring",
        "Cloud Interconnect",
      ],
      answerIndex: 2,
      explanation:
        "Cloud Monitoring collects metrics and supports dashboards, alerting policies, and uptime checks.",
    },
    {
      domain: "Exploring Data Transformation with Google Cloud",
      prompt:
        "A company has transactional data with relational joins and needs a managed database rather than an analytics warehouse. Which service is the closest fit?",
      options: [
        "Cloud CDN",
        "Cloud Logging",
        "Cloud Shell",
        "Cloud SQL",
      ],
      answerIndex: 3,
      explanation:
        "Cloud SQL is a managed relational database service, unlike BigQuery which is designed for analytics.",
    },
    {
      domain: "Innovating with Google Cloud Artificial Intelligence",
      prompt:
        "A business wants to use a pretrained model for document extraction rather than design a machine-learning model from scratch. What should it evaluate?",
      options: [
        "A Google Cloud AI API suited to document processing",
        "A Cloud VPN tunnel",
        "A persistent disk snapshot",
        "A billing export table",
      ],
      answerIndex: 0,
      explanation:
        "Managed AI APIs provide pretrained capabilities for common tasks such as document processing.",
    },
    {
      domain: "Scaling with Google Cloud Operations",
      prompt:
        "A service has varying request volume and should add or remove instances automatically based on load. Which design principle is most relevant?",
      options: [
        "Reserve one fixed instance for every possible peak",
        "Use autoscaling with appropriate capacity signals",
        "Disable health checks to avoid restarts",
        "Store application state only on one local disk",
      ],
      answerIndex: 1,
      explanation:
        "Autoscaling adjusts capacity as measured demand changes, helping maintain service while avoiding unnecessary fixed capacity.",
    },
  ],
  "gcp-associate-cloud-engineer": [
    {
      domain: "Setting up a cloud solution environment",
      prompt:
        "A new project needs to call the Compute Engine API. What should an engineer do before creating a VM?",
      options: [
        "Disable the project's billing account",
        "Create a Cloud DNS zone",
        "Enable the Compute Engine API for the project",
        "Make the project public",
      ],
      answerIndex: 0,
      explanation:
        "The Compute Engine API must be enabled in the project before its resources can be managed through that service.",
    },
    {
      domain: "Setting up a cloud solution environment",
      prompt:
        "An organization wants to group related projects under a department for policy inheritance and administration. Which resource hierarchy object should it use?",
      options: [
        "A Cloud Storage bucket",
        "A folder",
        "A firewall rule",
        "A service account key",
      ],
      answerIndex: 1,
      explanation:
        "Folders organize projects in the resource hierarchy and can inherit policies from parent organization nodes.",
    },
    {
      domain: "Planning and configuring a cloud solution",
      prompt:
        "A Linux VM must run a memory-intensive workload that needs more RAM relative to CPU. Which configuration should the engineer choose?",
      options: [
        "A smaller machine type with a larger boot disk",
        "A Cloud Storage bucket",
        "A machine type from a memory-optimized family",
        "A firewall rule with more ports",
      ],
      answerIndex: 2,
      explanation:
        "Memory-optimized machine types provide higher memory capacity relative to vCPU for memory-intensive workloads.",
    },
    {
      domain: "Planning and configuring a cloud solution",
      prompt:
        "A team needs to store uploaded documents durably and serve them to an application through object APIs. Which service should it configure?",
      options: [
        "Cloud SQL",
        "Cloud NAT",
        "Cloud Monitoring",
        "Cloud Storage",
      ],
      answerIndex: 3,
      explanation:
        "Cloud Storage provides durable object storage accessible through Google Cloud APIs and tools.",
    },
    {
      domain: "Deploying and implementing a cloud solution",
      prompt:
        "A containerized HTTP service should deploy from a container image without the team managing a cluster. Which managed service is a simple fit?",
      options: [
        "Cloud Run",
        "Cloud Interconnect",
        "Cloud DNS",
        "Cloud KMS",
      ],
      answerIndex: 0,
      explanation:
        "Cloud Run runs containerized services without requiring the team to administer a Kubernetes cluster.",
    },
    {
      domain: "Deploying and implementing a cloud solution",
      prompt:
        "A team wants to provision the same Google Cloud infrastructure repeatedly from reviewed configuration files. What should it use?",
      options: [
        "Manual console clicks with no record",
        "Infrastructure as code, such as Terraform",
        "A static external IP as a template",
        "A Cloud Logging sink",
      ],
      answerIndex: 1,
      explanation:
        "Infrastructure as code makes resource configuration repeatable and reviewable across environments.",
    },
    {
      domain: "Ensuring successful operation of a cloud solution",
      prompt:
        "A VM's application logs need to be centrally searched and retained instead of remaining only on the VM disk. Which service should receive them?",
      options: [
        "Cloud Billing",
        "Cloud DNS",
        "Cloud Logging",
        "Cloud NAT",
      ],
      answerIndex: 2,
      explanation:
        "Cloud Logging centralizes logs for querying, retention, and operational analysis.",
    },
    {
      domain: "Ensuring successful operation of a cloud solution",
      prompt:
        "An instance group should add VMs when average CPU use rises and remove them when load falls. Which feature should the engineer configure?",
      options: [
        "A Cloud Storage retention policy",
        "A Cloud SQL failover replica",
        "A static route",
        "Autoscaling based on CPU utilization",
      ],
      answerIndex: 3,
      explanation:
        "Managed instance group autoscaling can use CPU utilization as a signal to adjust the group's size.",
    },
    {
      domain: "Configuring access and security",
      prompt:
        "A workload on Compute Engine needs to call a Google Cloud API without storing a service account key file. What should be attached to the VM?",
      options: [
        "A service account with the required IAM roles",
        "The project owner's user password",
        "An unauthenticated public endpoint",
        "A customer-managed SSL certificate",
      ],
      answerIndex: 0,
      explanation:
        "A VM can use its attached service account's credentials to call APIs without a long-lived key file.",
    },
    {
      domain: "Configuring access and security",
      prompt:
        "An engineer needs to grant a teammate the ability to view logs but not modify resources. What should be assigned?",
      options: [
        "The Owner role on the organization",
        "A least-privilege logging viewer role at the narrowest useful scope",
        "A service account key shared by the team",
        "A public project visibility setting",
      ],
      answerIndex: 1,
      explanation:
        "A narrowly scoped viewer role provides the required read access without granting resource modification permissions.",
    },
  ],
  "gcp-professional-cloud-architect": [
    {
      domain: "Designing and planning a cloud solution",
      prompt:
        "A small HTTP API has unpredictable traffic and should scale to zero when idle, with minimal infrastructure management. Which deployment is most appropriate?",
      options: [
        "A fixed fleet of Compute Engine VMs",
        "A self-managed Kubernetes control plane",
        "Cloud Run with an appropriate minimum-instance setting",
        "A single on-premises server",
      ],
      answerIndex: 0,
      explanation:
        "Cloud Run manages container serving and can scale to zero unless minimum instances are configured.",
    },
    {
      domain: "Designing and planning a cloud solution",
      prompt:
        "A regulated service must keep its primary data in a specified geography and survive a zone failure. How should the architect start?",
      options: [
        "Choose the nearest region without checking requirements",
        "Select a compliant region and use a regional, multi-zone architecture",
        "Store the only copy on a zonal disk",
        "Use a global endpoint as proof of data residency",
      ],
      answerIndex: 1,
      explanation:
        "Region selection must meet residency constraints, and multi-zone regional resources can improve availability within that geography.",
    },
    {
      domain: "Managing and provisioning a cloud solution infrastructure",
      prompt:
        "A platform team needs repeatable projects, networks, and service configuration across environments. Which approach best supports consistent provisioning?",
      options: [
        "Manually recreate each resource from memory",
        "Use production credentials in every environment",
        "Maintain versioned infrastructure-as-code modules and controlled deployment pipelines",
        "Store configuration only in a shared spreadsheet",
      ],
      answerIndex: 2,
      explanation:
        "Versioned infrastructure as code enables reviewable and repeatable provisioning across environments.",
    },
    {
      domain: "Managing and provisioning a cloud solution infrastructure",
      prompt:
        "A fleet of Compute Engine VMs needs a secure, auditable way to access Cloud Storage. Which design is preferable?",
      options: [
        "Embed a user's password in each VM image",
        "Make the bucket public",
        "Copy a long-lived owner key onto every VM",
        "Attach a dedicated service account with narrowly scoped IAM permissions",
      ],
      answerIndex: 3,
      explanation:
        "A dedicated service account and least-privilege IAM avoid distributing user credentials or broad keys.",
    },
    {
      domain: "Designing for security and compliance",
      prompt:
        "A highly regulated workload must prevent data from being copied outside an approved perimeter of Google Cloud services. Which control should the architect evaluate?",
      options: [
        "VPC Service Controls",
        "Cloud CDN",
        "Cloud Scheduler",
        "A larger Compute Engine machine type",
      ],
      answerIndex: 0,
      explanation:
        "VPC Service Controls can define service perimeters that help reduce data exfiltration risk from supported services.",
    },
    {
      domain: "Designing for security and compliance",
      prompt:
        "An organization requires control over encryption key rotation and access for selected stored data. Which capability should it design for?",
      options: [
        "A public bucket ACL",
        "Customer-managed encryption keys through Cloud KMS",
        "An external IP address",
        "A Cloud DNS forwarding zone",
      ],
      answerIndex: 1,
      explanation:
        "Cloud KMS customer-managed keys let an organization control key administration and usage for supported services.",
    },
    {
      domain: "Analyzing and optimizing technical and business processes",
      prompt:
        "An analytics team must run SQL over very large data sets while minimizing cluster administration. Which service should the architect consider?",
      options: [
        "Cloud NAT",
        "Compute Engine unmanaged instance groups",
        "BigQuery",
        "Cloud VPN",
      ],
      answerIndex: 2,
      explanation:
        "BigQuery provides serverless analytics and avoids managing a dedicated query cluster.",
    },
    {
      domain: "Analyzing and optimizing technical and business processes",
      prompt:
        "A workload has sustained resource utilization far below its provisioned capacity. What is the best next step before resizing production?",
      options: [
        "Disable all metrics",
        "Move it to a larger machine type",
        "Remove its availability controls",
        "Review Cloud Monitoring data and recommendations, then test a right-sized configuration",
      ],
      answerIndex: 3,
      explanation:
        "Observed telemetry and recommendations provide evidence for right-sizing while testing protects service requirements.",
    },
    {
      domain: "Managing implementations of cloud architecture",
      prompt:
        "A company is migrating a legacy application in phases and needs to track dependencies and wave readiness. Which practice best reduces cutover risk?",
      options: [
        "Inventory dependencies, pilot a migration wave, and validate rollback criteria",
        "Move every server at once with no rehearsal",
        "Delete source backups before testing",
        "Change DNS before workloads are verified",
      ],
      answerIndex: 0,
      explanation:
        "Dependency mapping and a tested pilot expose issues early and make wave cutovers more controlled.",
    },
    {
      domain: "Ensuring solution and operations reliability",
      prompt:
        "A service's availability objective is 99.9% and the team needs to balance reliability work with feature delivery. Which concept helps guide that balance?",
      options: [
        "A storage class",
        "An error budget derived from the service-level objective",
        "A static IP reservation",
        "A billing export schema",
      ],
      answerIndex: 1,
      explanation:
        "An error budget quantifies allowable unreliability under an SLO and can guide release and reliability decisions.",
    },
  ],
  "gcp-professional-data-engineer": [
    {
      domain: "Designing data processing systems",
      prompt:
        "A pipeline must process unbounded event data, tolerate late arrivals, and write windowed aggregates to BigQuery. Which service is designed for this streaming pattern?",
      options: [
        "Cloud DNS",
        "Cloud NAT",
        "Dataflow",
        "Cloud Armor",
      ],
      answerIndex: 0,
      explanation:
        "Dataflow supports streaming pipelines with event-time windows and handling for late-arriving data.",
    },
    {
      domain: "Designing data processing systems",
      prompt:
        "A near-real-time pipeline must absorb bursty events from many producers before downstream processing. Which ingestion service is a good fit?",
      options: [
        "Cloud Storage Nearline",
        "Pub/Sub",
        "Cloud VPN",
        "Cloud DNS",
      ],
      answerIndex: 1,
      explanation:
        "Pub/Sub is a managed messaging service that decouples producers from consumers and absorbs varying event rates.",
    },
    {
      domain: "Ingesting and processing data",
      prompt:
        "A daily batch job reads files from Cloud Storage, transforms records with Spark, and writes results to BigQuery. Which managed service runs this workload?",
      options: [
        "Cloud CDN",
        "Cloud Run functions",
        "Dataproc",
        "Cloud Interconnect",
      ],
      answerIndex: 2,
      explanation:
        "Dataproc provides managed Spark and Hadoop clusters for batch data processing.",
    },
    {
      domain: "Ingesting and processing data",
      prompt:
        "An event pipeline should route messages to multiple independently scaling consumers. Which pattern provides the strongest decoupling?",
      options: [
        "One consumer directly calling every other consumer",
        "A shared local file on one VM",
        "A synchronous database transaction across all consumers",
        "Publish events to Pub/Sub and let each consumer use its own subscription",
      ],
      answerIndex: 3,
      explanation:
        "Separate Pub/Sub subscriptions let consumers receive and scale independently from the publisher and one another.",
    },
    {
      domain: "Storing the data",
      prompt:
        "A warehouse table is frequently filtered by event date and queried for a few selected columns. Which BigQuery design can reduce scanned data?",
      options: [
        "Partition the table by date and cluster it by common filter columns",
        "Store all records in one unpartitioned table with no schema",
        "Export every query to local CSV first",
        "Duplicate the table for every query",
      ],
      answerIndex: 0,
      explanation:
        "Date partitioning and clustering can prune irrelevant data blocks and lower bytes scanned for suitable queries.",
    },
    {
      domain: "Storing the data",
      prompt:
        "A workload needs a globally available, strongly consistent relational database with horizontal scaling. Which Google Cloud database should be evaluated?",
      options: [
        "Cloud Storage",
        "Cloud Spanner",
        "Memorystore",
        "BigQuery",
      ],
      answerIndex: 1,
      explanation:
        "Cloud Spanner is a horizontally scalable relational database with strong consistency and global deployment options.",
    },
    {
      domain: "Preparing and using data for analysis",
      prompt:
        "Analysts need governed SQL access to curated warehouse tables without repeatedly copying raw data into separate files. What should the data team provide?",
      options: [
        "A public VM with database credentials",
        "A local disk image",
        "Authorized views or controlled dataset access in BigQuery",
        "An unmanaged FTP server",
      ],
      answerIndex: 2,
      explanation:
        "BigQuery authorized views and dataset IAM provide governed access without distributing unmanaged copies.",
    },
    {
      domain: "Maintaining and automating data workloads",
      prompt:
        "A Dataflow pipeline must be deployed repeatedly with runtime parameters in different environments. Which approach is suitable?",
      options: [
        "Edit production workers by hand",
        "Store the only pipeline definition on a developer laptop",
        "Disable pipeline monitoring",
        "Use a Dataflow template with environment-specific parameters",
      ],
      answerIndex: 3,
      explanation:
        "Dataflow templates package a reusable pipeline and allow runtime parameters to vary by deployment.",
    },
    {
      domain: "Operationalizing machine learning models",
      prompt:
        "A data science team needs a managed feature store and model-serving workflow integrated with model training. Which platform should it evaluate?",
      options: [
        "Vertex AI",
        "Cloud DNS",
        "Cloud NAT",
        "Cloud Router",
      ],
      answerIndex: 0,
      explanation:
        "Vertex AI provides managed services for model development, deployment, and related machine-learning workflows.",
    },
    {
      domain: "Operationalizing machine learning models",
      prompt:
        "A deployed model's predictions are degrading as input patterns change. What operational practice can help detect this?",
      options: [
        "Stop collecting model input statistics",
        "Monitor prediction and feature distributions for drift and retrain when validated",
        "Increase the storage bucket's retention period only",
        "Disable model versioning",
      ],
      answerIndex: 1,
      explanation:
        "Monitoring feature or prediction drift can reveal changing data patterns that warrant investigation and model refresh.",
    },
  ],
  "azure-fundamentals": [
    {
      domain: "Describe cloud concepts",
      prompt:
        "An organization wants to add compute capacity during busy periods and release it afterward instead of maintaining peak hardware year-round. Which cloud concept enables this?",
      options: [
        "Manual hardware depreciation",
        "Fixed capacity",
        "Elasticity",
        "A local-only network",
      ],
      answerIndex: 0,
      explanation:
        "Elasticity lets resources expand or contract as workload demand changes.",
    },
    {
      domain: "Describe cloud concepts",
      prompt:
        "What is a key difference between a public cloud platform and a company-owned on-premises data center?",
      options: [
        "Public cloud resources cannot use networks",
        "A public cloud provider operates shared infrastructure that customers provision as services",
        "On-premises data centers never require maintenance",
        "Public cloud services have no security controls",
      ],
      answerIndex: 1,
      explanation:
        "Public cloud services run on provider-operated infrastructure that customers consume through defined service models.",
    },
    {
      domain: "Describe cloud concepts",
      prompt:
        "A company uses Azure virtual machines but manages the guest operating system and its installed applications. Which cloud service model is this?",
      options: [
        "Software as a Service",
        "Function as a Service only",
        "Infrastructure as a Service",
        "Desktop as a Service",
      ],
      answerIndex: 2,
      explanation:
        "With IaaS virtual machines, the customer manages the guest OS and applications while Azure manages the physical infrastructure.",
    },
    {
      domain: "Describe Azure architecture and services",
      prompt:
        "A company wants to deploy a web application without managing the underlying operating system. Which Azure service is a direct fit?",
      options: [
        "Azure DNS",
        "Azure Policy",
        "Azure Files",
        "Azure App Service",
      ],
      answerIndex: 3,
      explanation:
        "Azure App Service hosts web applications as a managed platform, reducing the need to administer the OS.",
    },
    {
      domain: "Describe Azure architecture and services",
      prompt:
        "Which Azure service is designed for scalable object storage of unstructured files such as images and backups?",
      options: [
        "Azure Blob Storage",
        "Azure Virtual Network",
        "Azure Monitor",
        "Azure Key Vault",
      ],
      answerIndex: 0,
      explanation:
        "Azure Blob Storage stores unstructured object data at scale.",
    },
    {
      domain: "Describe Azure architecture and services",
      prompt:
        "A virtual machine must communicate with resources in a private address space isolated from other virtual networks. What should it be deployed into?",
      options: [
        "A Microsoft Entra tenant",
        "An Azure virtual network",
        "A billing profile",
        "A resource lock",
      ],
      answerIndex: 1,
      explanation:
        "Azure virtual networks provide private network isolation and connectivity for deployed resources.",
    },
    {
      domain: "Describe Azure management and governance",
      prompt:
        "A governance team needs to enforce that resources use approved regions. Which Azure service can evaluate and enforce this rule?",
      options: [
        "Azure Advisor",
        "Azure DNS",
        "Azure Policy",
        "Azure Bastion",
      ],
      answerIndex: 2,
      explanation:
        "Azure Policy can audit or deny resource configurations that violate assigned governance rules.",
    },
    {
      domain: "Describe Azure management and governance",
      prompt:
        "A team wants to estimate the monthly cost of planned Azure resources before deploying them. Which tool should it use?",
      options: [
        "Azure Key Vault",
        "Azure Service Health",
        "Azure Network Watcher",
        "Azure Pricing Calculator",
      ],
      answerIndex: 3,
      explanation:
        "The Azure Pricing Calculator estimates costs for planned resource configurations.",
    },
    {
      domain: "Describe Azure management and governance",
      prompt:
        "An administrator needs to review recommendations for improving an Azure environment's cost, reliability, and performance. Which service provides these recommendations?",
      options: [
        "Azure Advisor",
        "Azure DNS",
        "Azure Bastion",
        "Azure Files",
      ],
      answerIndex: 0,
      explanation:
        "Azure Advisor analyzes resource configurations and provides recommendations across several operational categories.",
    },
    {
      domain: "Describe Azure management and governance",
      prompt:
        "A platform team needs a record of resource changes and administrative operations for investigation. Which capability should it use?",
      options: [
        "An Azure storage lifecycle rule",
        "The Azure Activity Log",
        "An Azure Load Balancer probe",
        "A virtual machine scale set",
      ],
      answerIndex: 1,
      explanation:
        "The Azure Activity Log records subscription-level management operations and can support auditing and investigation.",
    },
  ],
  "azure-administrator": [
    {
      domain: "Manage Azure identities and governance",
      prompt:
        "An administrator must let a support engineer restart virtual machines in one resource group but not grant broader subscription access. What should be assigned?",
      options: [
        "The Owner role at subscription scope",
        "A global administrator account",
        "The Virtual Machine Contributor role at that resource group",
        "A public access key",
      ],
      answerIndex: 0,
      explanation:
        "Assigning a suitable role at the resource-group scope limits permissions to the required resources.",
    },
    {
      domain: "Manage Azure identities and governance",
      prompt:
        "A company wants administrators to activate elevated permissions only when needed and for a limited time. Which Microsoft Entra feature should it use?",
      options: [
        "Azure Storage lifecycle management",
        "Privileged Identity Management",
        "Azure DNS",
        "Network security groups",
      ],
      answerIndex: 1,
      explanation:
        "Privileged Identity Management supports just-in-time, time-limited activation of privileged roles.",
    },
    {
      domain: "Implement and manage storage",
      prompt:
        "An application needs temporary read access to a private blob without receiving the storage account key. Which mechanism is appropriate?",
      options: [
        "A public container",
        "A permanent owner assignment",
        "A narrowly scoped shared access signature",
        "A virtual network peer",
      ],
      answerIndex: 2,
      explanation:
        "A shared access signature can grant constrained, time-limited access without exposing the account key.",
    },
    {
      domain: "Implement and manage storage",
      prompt:
        "A business needs zone-level durability for a storage account in a supported region. Which redundancy option should it evaluate?",
      options: [
        "Locally redundant storage only",
        "A file share mounted on one VM",
        "A manual copy to a laptop",
        "Zone-redundant storage",
      ],
      answerIndex: 3,
      explanation:
        "Zone-redundant storage synchronously replicates data across availability zones in supported regions.",
    },
    {
      domain: "Deploy and manage Azure compute resources",
      prompt:
        "A workload needs multiple identical VMs that can scale out and be managed as a group. Which Azure resource is designed for this?",
      options: [
        "A virtual machine scale set",
        "A single managed disk",
        "An Azure DNS zone",
        "A private endpoint",
      ],
      answerIndex: 0,
      explanation:
        "Virtual machine scale sets manage groups of load-balanced VMs and support scaling the instance count.",
    },
    {
      domain: "Deploy and manage Azure compute resources",
      prompt:
        "A team needs to deploy a VM from a repeatable configuration using a declarative template. Which Azure tool is designed for this?",
      options: [
        "Azure Monitor workbook",
        "An ARM template or Bicep file",
        "A network security group",
        "A Cost Management alert",
      ],
      answerIndex: 1,
      explanation:
        "ARM templates and Bicep define Azure resources declaratively for repeatable deployments.",
    },
    {
      domain: "Implement and manage virtual networking",
      prompt:
        "A subnet should allow inbound HTTPS only from a known application gateway subnet. Where should the administrator define this traffic rule?",
      options: [
        "A resource lock",
        "A storage lifecycle policy",
        "A network security group rule",
        "A cost budget",
      ],
      answerIndex: 2,
      explanation:
        "Network security group rules filter inbound and outbound traffic for associated subnets or network interfaces.",
    },
    {
      domain: "Implement and manage virtual networking",
      prompt:
        "A VM in a private subnet needs outbound internet connectivity without accepting unsolicited inbound connections. Which managed service can provide this?",
      options: [
        "An Azure DNS private zone",
        "A public load balancer inbound rule",
        "A resource group",
        "NAT Gateway",
      ],
      answerIndex: 3,
      explanation:
        "Azure NAT Gateway provides scalable outbound connectivity for private subnet resources without exposing them to inbound initiation.",
    },
    {
      domain: "Monitor and maintain Azure resources",
      prompt:
        "An administrator needs to alert when a virtual machine's CPU remains above a threshold. Which service should be configured?",
      options: [
        "Azure Monitor metric alert",
        "Azure Policy assignment",
        "Azure Resource Graph only",
        "An NSG flow rule",
      ],
      answerIndex: 0,
      explanation:
        "Azure Monitor metric alerts evaluate metric conditions and can notify or trigger actions when thresholds are met.",
    },
    {
      domain: "Monitor and maintain Azure resources",
      prompt:
        "A team wants to collect guest operating system performance counters from Azure VMs into a central workspace. Which agent configuration should it use?",
      options: [
        "Azure DNS resolver",
        "Azure Monitor Agent with a data collection rule",
        "A storage account access tier",
        "A route table",
      ],
      answerIndex: 1,
      explanation:
        "Azure Monitor Agent and data collection rules define which guest telemetry is collected and where it is sent.",
    },
  ],
  "azure-developer": [
    {
      domain: "Develop Azure compute solutions",
      prompt:
        "A web team wants to validate a new App Service version before moving production traffic to it. Which feature supports a controlled swap?",
      options: [
        "An Azure Policy initiative",
        "A storage access tier",
        "Deployment slots",
        "A virtual network peering",
      ],
      answerIndex: 0,
      explanation:
        "App Service deployment slots let a team validate a staged version and swap it into production.",
    },
    {
      domain: "Develop Azure compute solutions",
      prompt:
        "An event-driven function should execute when a blob is uploaded to Azure Storage. Which configuration should the developer use?",
      options: [
        "A virtual machine boot diagnostic",
        "An Azure Functions blob trigger",
        "A subnet delegation",
        "A storage account firewall rule",
      ],
      answerIndex: 1,
      explanation:
        "An Azure Functions blob trigger starts function execution in response to eligible blob changes.",
    },
    {
      domain: "Develop for Azure storage",
      prompt:
        "An application needs to read and write blobs using its managed identity instead of a storage key. Which access mechanism should be configured?",
      options: [
        "A public container ACL",
        "A DNS CNAME",
        "Azure RBAC data-plane permissions for the managed identity",
        "A VM administrator password",
      ],
      answerIndex: 2,
      explanation:
        "Azure RBAC data roles can authorize a managed identity to access blob data without embedding account keys.",
    },
    {
      domain: "Develop for Azure storage",
      prompt:
        "A globally distributed app uses Cosmos DB and needs reads to reflect the caller's prior writes without requiring strong global consistency. Which consistency level should it consider?",
      options: [
        "Strong",
        "Bounded staleness only",
        "Consistent prefix only",
        "Session",
      ],
      answerIndex: 3,
      explanation:
        "Session consistency provides read-your-writes guarantees within a session without imposing global strong consistency.",
    },
    {
      domain: "Implement Azure security",
      prompt:
        "A deployed application must retrieve a database secret without storing it in source code or app settings as plain text. Which service should it use?",
      options: [
        "Azure Key Vault",
        "Azure DNS",
        "Azure Load Testing",
        "Azure Cost Management",
      ],
      answerIndex: 0,
      explanation:
        "Azure Key Vault stores secrets and can authorize applications through managed identities.",
    },
    {
      domain: "Implement Azure security",
      prompt:
        "A developer wants an Azure-hosted application to access Key Vault without provisioning a client secret. What should be enabled?",
      options: [
        "A public IP on the vault",
        "A managed identity for the application",
        "Anonymous access to secrets",
        "A shared administrator password",
      ],
      answerIndex: 1,
      explanation:
        "A managed identity provides the application an Entra identity that can be granted access without a client secret.",
    },
    {
      domain: "Monitor, troubleshoot, and optimize Azure solutions",
      prompt:
        "A developer needs correlated request traces and dependency timing for a web application. Which service should be instrumented?",
      options: [
        "Azure Policy",
        "Azure DNS",
        "Application Insights",
        "Azure Resource Manager locks",
      ],
      answerIndex: 2,
      explanation:
        "Application Insights collects application telemetry including requests, dependencies, and distributed traces.",
    },
    {
      domain: "Monitor, troubleshoot, and optimize Azure solutions",
      prompt:
        "A production service should notify the on-call team when its error rate crosses a threshold. Which Azure Monitor feature should be configured?",
      options: [
        "A storage lifecycle policy",
        "A resource tag",
        "A deployment slot",
        "An alert rule with an action group",
      ],
      answerIndex: 3,
      explanation:
        "Azure Monitor alert rules evaluate telemetry conditions and action groups deliver notifications or trigger actions.",
    },
    {
      domain: "Connect to and consume Azure services and third-party services",
      prompt:
        "A producer should send work to a durable queue so a consumer can process it independently and retry failures. Which Azure service is a good fit?",
      options: [
        "Azure Service Bus queue",
        "Azure DNS",
        "Azure Bastion",
        "Azure Policy",
      ],
      answerIndex: 0,
      explanation:
        "Service Bus queues decouple producers from consumers and support reliable message processing patterns.",
    },
    {
      domain: "Connect to and consume Azure services and third-party services",
      prompt:
        "A system needs to react to discrete resource events and route them to handlers without polling a database. Which service should it evaluate?",
      options: [
        "Azure Files",
        "Azure Event Grid",
        "Azure Virtual Desktop",
        "Azure Disk Storage",
      ],
      answerIndex: 1,
      explanation:
        "Event Grid routes event notifications to subscribers, enabling event-driven reactions without polling.",
    },
  ],
  "azure-solutions-architect": [
    {
      domain: "Design identity, governance, and monitoring solutions",
      prompt:
        "A company needs to enforce naming and region requirements across many subscriptions while allowing teams to deploy compliant resources. Which governance approach is appropriate?",
      options: [
        "Give every team subscription Owner access",
        "Rely on monthly manual reviews only",
        "Use Azure Policy initiatives assigned at a management-group scope",
        "Put all resources in one untagged resource group",
      ],
      answerIndex: 0,
      explanation:
        "Management-group policy assignments can apply reusable governance controls consistently across subscriptions.",
    },
    {
      domain: "Design identity, governance, and monitoring solutions",
      prompt:
        "A workload should access Azure resources using its own identity and avoid stored credentials. Which design should the architect choose?",
      options: [
        "Share a global administrator password",
        "Use a managed identity and grant it least-privilege roles",
        "Embed a service principal secret in the image",
        "Enable anonymous access on the target resources",
      ],
      answerIndex: 1,
      explanation:
        "Managed identities provide an application identity without stored credentials, and scoped roles limit its permissions.",
    },
    {
      domain: "Design data storage solutions",
      prompt:
        "An application stores JSON documents and needs a globally distributed NoSQL database with configurable consistency. Which Azure service is a direct fit?",
      options: [
        "Azure Blob Storage",
        "Azure Files",
        "Azure Cosmos DB for NoSQL",
        "Azure SQL Database",
      ],
      answerIndex: 2,
      explanation:
        "Azure Cosmos DB for NoSQL is a globally distributed document database with configurable consistency levels.",
    },
    {
      domain: "Design data storage solutions",
      prompt:
        "A workload stores documents that are accessed frequently for 30 days and then rarely. Which storage design can reduce ongoing cost?",
      options: [
        "Keep all blobs in the Hot tier permanently",
        "Copy each blob to a VM disk",
        "Delete the data after each month regardless of retention needs",
        "Use Blob lifecycle management to transition older data to a cooler tier",
      ],
      answerIndex: 3,
      explanation:
        "Blob lifecycle management can transition aging data to lower-cost access tiers when retrieval latency and costs remain acceptable.",
    },
    {
      domain: "Design business continuity solutions",
      prompt:
        "A mission-critical service must recover after a regional outage, and the business requires a short recovery time objective. What should the architect design?",
      options: [
        "A tested secondary-region deployment with replicated data and documented failover",
        "A single-region backup with no restore test",
        "A larger VM in the same availability zone",
        "A DNS record pointing to the failed region",
      ],
      answerIndex: 0,
      explanation:
        "A secondary-region design with replicated data and practiced failover reduces recovery time after a regional outage.",
    },
    {
      domain: "Design business continuity solutions",
      prompt:
        "A database's backups must be recoverable to a point in time after accidental deletion. Which capability should be configured and tested?",
      options: [
        "A resource tag",
        "Automated backups with point-in-time restore and retention aligned to requirements",
        "A public endpoint",
        "A manual VM restart policy",
      ],
      answerIndex: 1,
      explanation:
        "Point-in-time restore uses retained backups and transaction logs to recover database state to a selected time.",
    },
    {
      domain: "Design infrastructure solutions",
      prompt:
        "An organization must connect its on-premises network to Azure privately with predictable high throughput. Which option should it evaluate?",
      options: [
        "A public DNS record",
        "An Azure Storage SAS",
        "ExpressRoute",
        "A service health alert",
      ],
      answerIndex: 2,
      explanation:
        "ExpressRoute provides private connectivity between an organization's network and Microsoft cloud services through a connectivity provider.",
    },
    {
      domain: "Design infrastructure solutions",
      prompt:
        "A web application must be reachable publicly while its database remains isolated from the internet. Which network design is appropriate?",
      options: [
        "Place both tiers on public IPs in one subnet",
        "Expose the database port to all addresses",
        "Disable network security rules",
        "Use a public ingress tier and private database subnet with narrowly scoped network access",
      ],
      answerIndex: 3,
      explanation:
        "Separating public ingress from private data resources reduces exposure and permits only required application-to-database traffic.",
    },
    {
      domain: "Design identity, governance, and monitoring solutions",
      prompt:
        "A company needs to correlate application telemetry and infrastructure metrics to detect a multi-tier outage. Which design is best?",
      options: [
        "Send diagnostic settings and application telemetry to a central Log Analytics workspace with alerts",
        "Keep all logs only on individual VM disks",
        "Disable metrics to reduce data volume",
        "Use resource tags as the only monitoring method",
      ],
      answerIndex: 0,
      explanation:
        "Centralized telemetry enables cross-resource queries and alerts that help diagnose multi-tier failures.",
    },
    {
      domain: "Design data storage solutions",
      prompt:
        "A solution must protect a storage account from access over the public internet while allowing an application in a virtual network. Which design should the architect consider?",
      options: [
        "Enable anonymous blob access",
        "Use a private endpoint and restrict public network access",
        "Share the account key in a deployment script",
        "Place the storage account in a public subnet",
      ],
      answerIndex: 1,
      explanation:
        "A private endpoint gives the application private network access while public network access can be disabled or restricted.",
    },
  ],
};

export const questions: Question[] = Object.entries(questionSeeds).flatMap(
  ([certificationId, seeds]) =>
    seeds.map((question, index) => ({
      ...question,
      id: `${certificationId}-q${index + 1}`,
      certificationId,
    })),
);

function hashSeed(seed: string) {
  let hash = 0x811c9dc5;

  for (let index = 0; index < seed.length; index += 1) {
    hash ^= seed.charCodeAt(index);
    hash = Math.imul(hash, 0x01000193);
  }

  return hash >>> 0;
}

function mulberry32(seed: number) {
  return () => {
    let value = (seed += 0x6d2b79f5);
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

export function generateExam(
  certificationId: string,
  seed: string,
): ExamQuestion[] {
  const random = mulberry32(hashSeed(`${certificationId}:${seed}`));
  const selectedQuestions = questions.filter(
    (question) => question.certificationId === certificationId,
  );

  for (let index = selectedQuestions.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(random() * (index + 1));
    [selectedQuestions[index], selectedQuestions[swapIndex]] = [
      selectedQuestions[swapIndex],
      selectedQuestions[index],
    ];
  }

  return selectedQuestions
    .slice(0, EXAM_QUESTION_COUNT)
    .map(({ id, domain, prompt, options }) => ({
      id,
      domain,
      prompt,
      options,
    }));
}
