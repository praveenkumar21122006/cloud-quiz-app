const QUESTIONS = [
  { q: "According to NIST, how many essential characteristics define cloud computing?", options: ["3", "4", "5", "6"], answer: 2, explain: "NIST defines 5 essential characteristics: on-demand self-service, broad network access, resource pooling, rapid elasticity, and measured service." },
  { q: "Which is NOT an essential characteristic of cloud computing per NIST?", options: ["Rapid elasticity", "Resource pooling", "Fixed capacity provisioning", "Measured service"], answer: 2, explain: "Fixed capacity provisioning is opposite of cloud; elasticity and measured service are essential." },
  { q: "Which deployment model is owned and operated solely for one organization?", options: ["Public cloud", "Private cloud", "Hybrid cloud", "Community cloud"], answer: 1, explain: "Private cloud is provisioned for exclusive use by a single organization." },
  { q: "Which deployment model combines public and private clouds with data portability?", options: ["Hybrid cloud", "Public cloud", "Private cloud", "Distributed cloud"], answer: 0, explain: "Hybrid cloud binds public and private clouds allowing workload portability." },
  { q: "IaaS, PaaS, SaaS are examples of:", options: ["Deployment models", "Service models", "Pricing models", "Virtualization types"], answer: 1, explain: "They are the three main cloud service models." },
  { q: "Which service model gives you control over OS, storage and deployed apps but not underlying infrastructure?", options: ["SaaS", "PaaS", "IaaS", "FaaS"], answer: 2, explain: "IaaS provides virtualized compute resources; user manages OS and apps." },
  { q: "Which service model allows developers to deploy apps without managing servers or OS?", options: ["IaaS", "PaaS", "SaaS", "CaaS"], answer: 1, explain: "PaaS abstracts OS and infrastructure; e.g., AWS Elastic Beanstalk, Heroku, Google App Engine." },
  { q: "Gmail and Microsoft 365 are examples of:", options: ["IaaS", "PaaS", "SaaS", "DaaS"], answer: 2, explain: "SaaS delivers software over the internet on subscription." },
  { q: "Type 1 hypervisor is also called:", options: ["Hosted hypervisor", "Bare-metal hypervisor", "Container hypervisor", "Paravirtual hypervisor"], answer: 1, explain: "Type 1 runs directly on hardware (e.g., VMware ESXi, Hyper-V, KVM)." },
  { q: "Which AWS service provides resizable virtual servers?", options: ["S3", "EC2", "RDS", "Lambda"], answer: 1, explain: "EC2 = Elastic Compute Cloud provides resizable VMs." },
  { q: "Which AWS service is object storage with 11 9's durability?", options: ["EBS", "EFS", "S3", "FSx"], answer: 2, explain: "S3 offers 99.999999999% durability for object storage." },
  { q: "AWS Lambda is an example of:", options: ["IaaS", "Serverless / FaaS", "BaaS", "DaaS"], answer: 1, explain: "Lambda is Function-as-a-Service; you run code without provisioning servers." },
  { q: "Which Azure service is equivalent to AWS EC2?", options: ["Azure Blob Storage", "Azure Virtual Machines", "Azure Functions", "Azure App Service"], answer: 1, explain: "Azure Virtual Machines provides IaaS VMs like EC2." },
  { q: "Which GCP service is equivalent to AWS S3?", options: ["Google Cloud Storage", "Google Compute Engine", "Google BigQuery", "Google Cloud Functions"], answer: 0, explain: "Google Cloud Storage is object storage equivalent to S3." },
  { q: "What does CAP theorem state a distributed system can only guarantee two of?", options: ["Consistency, Availability, Partition tolerance", "Compute, Availability, Performance", "Consistency, Agility, Partitioning", "Cost, Availability, Performance"], answer: 0, explain: "CAP = Consistency, Availability, Partition tolerance." },
  { q: "Which storage type is ideal for VM boot volumes and databases requiring low latency block access?", options: ["Object storage", "Block storage", "File storage", "Archive storage"], answer: 1, explain: "Block storage (e.g., AWS EBS) provides raw block devices for VMs/databases." },
  { q: "Which storage type is accessed via REST API with keys and is immutable?", options: ["Block storage", "Object storage", "File storage", "Ephemeral storage"], answer: 1, explain: "Object storage uses REST APIs and stores immutable objects (keys)." },
  { q: "What does a CDN primarily do?", options: ["Encrypt data at rest", "Cache content at edge locations to reduce latency", "Provide block storage", "Manage IAM policies"], answer: 1, explain: "CDN (e.g., CloudFront, Cloud CDN) caches content near users." },
  { q: "Which component distributes incoming traffic across multiple instances?", options: ["Auto Scaling Group", "Load Balancer", "VPC", "NAT Gateway"], answer: 1, explain: "Load balancers (ELB/ALB) distribute traffic for availability." },
  { q: "Auto Scaling primarily provides:", options: ["Fixed capacity", "Elasticity by adding/removing instances based on demand", "Data encryption", "DNS resolution"], answer: 1, explain: "Auto Scaling ensures elasticity and high availability." },
  { q: "A VPC stands for:", options: ["Virtual Private Cloud", "Verified Public Cluster", "Virtual Platform Center", "Variable Private Compute"], answer: 0, explain: "VPC is an isolated virtual network in the cloud." },
  { q: "Which AWS service manages identities and permissions?", options: ["IAM", "KMS", "ACM", "STS"], answer: 0, explain: "IAM = Identity and Access Management." },
  { q: "Under the shared responsibility model, who is responsible for data encryption by the customer?", options: ["Cloud provider only", "Customer", "Both equally for physical hosts", "Third-party auditor"], answer: 1, explain: "Customer is responsible for data, encryption, and access management; provider secures the cloud itself." },
  { q: "Serverless still runs servers, but:", options: ["Customer never manages them", "Customer racks them", "No servers involved at all", "Only for frontend"], answer: 0, explain: "Provider manages servers; customer only supplies code." },
  { q: "Main difference between VMs and containers?", options: ["VMs share host OS kernel, containers don't", "Containers share host OS kernel, VMs have full guest OS", "Both identical", "Containers are slower"], answer: 1, explain: "Containers share the host kernel and are lightweight; VMs include full OS." },
  { q: "Which is a container orchestration platform?", options: ["Docker", "Kubernetes", "Jenkins", "Ansible"], answer: 1, explain: "Kubernetes orchestrates containers at scale." },
  { q: "Docker's primary role is:", options: ["Orchestration", "Containerization (packaging apps with dependencies)", "Load balancing", "Object storage"], answer: 1, explain: "Docker packages apps and dependencies into portable containers." },
  { q: "Which pattern decomposes an app into independently deployable small services?", options: ["Monolithic", "Microservices", "Layered", "Event sourcing only"], answer: 1, explain: "Microservices architecture splits apps into small independent services." },
  { q: "An API Gateway typically does NOT:", options: ["Rate limiting and auth", "Request routing", "Hosting bare-metal OS kernels", "Monitoring and versioning"], answer: 2, explain: "API Gateway manages APIs, not bare-metal OS hosting." },
  { q: "Amazon RDS is a:", options: ["Managed relational database service", "NoSQL service", "File share", "CDN"], answer: 0, explain: "RDS manages MySQL, PostgreSQL, etc. with backups and patching." },
  { q: "Amazon DynamoDB is:", options: ["Relational SQL DB", "Managed NoSQL key-value/document DB", "Object storage", "Data warehouse"], answer: 1, explain: "DynamoDB is serverless NoSQL with single-digit ms latency." },
  { q: "Which is OLAP data warehouse service in GCP?", options: ["Cloud SQL", "BigQuery", "Firestore", "Cloud Spanner"], answer: 1, explain: "BigQuery is serverless OLAP warehouse for analytics." },
  { q: "Horizontal scaling means:", options: ["Adding more CPU/RAM to one server", "Adding more servers/nodes", "Adding storage only", "Vertical partitioning only"], answer: 1, explain: "Horizontal = scale out with more instances; vertical = scale up." },
  { q: "Vertical scaling means:", options: ["Adding more machines", "Increasing resources (CPU/RAM) of existing machine", "Sharding data", "Adding CDN nodes"], answer: 1, explain: "Vertical scaling increases capacity of a single node." },
  { q: "Edge computing primarily:", options: ["Processes data closer to source to reduce latency", "Only stores archival data", "Requires all data to go to central cloud", "Is same as core cloud region"], answer: 0, explain: "Edge brings compute near data source/devices." },
  { q: "RTO stands for:", options: ["Recovery Time Objective", "Real Time Optimization", "Resource Transfer Operation", "Restore Timeout Option"], answer: 0, explain: "RTO = max time to restore after disaster." },
  { q: "RPO stands for:", options: ["Recovery Point Objective", "Resource Provisioning Order", "Restore Process Output", "Recovery Protocol Override"], answer: 0, explain: "RPO = max acceptable data loss in time." },
  { q: "Which backup strategy follows 3-2-1 rule?", options: ["3 copies, 2 media types, 1 offsite", "3 regions, 2 zones, 1 VPC", "3 users, 2 keys, 1 bucket", "3 VMs, 2 containers, 1 pod"], answer: 0, explain: "3-2-1: 3 copies, 2 different media, 1 offsite/off-cloud." },
  { q: "Pay-as-you-go pricing means:", options: ["Fixed annual fee regardless of usage", "Pay only for resources consumed", "Free forever", "Pay per data center"], answer: 1, explain: "Measured service: pay for what you use." },
  { q: "Reserved Instances / Committed Use Discounts give:", options: ["Higher cost for flexibility", "Lower cost in exchange for 1-3 year commitment", "No discount", "Only for SaaS"], answer: 1, explain: "Long-term commitments yield significant discounts vs on-demand." },
  { q: "An SLA typically guarantees:", options: ["Uptime percentage (e.g., 99.9%) and credits if missed", "Unlimited free features", "Zero latency", "Feature roadmap"], answer: 0, explain: "SLA defines uptime guarantees and compensation." },
  { q: "Multi-tenancy means:", options: ["Single tenant per physical server only", "Multiple customers share same infrastructure securely isolated", "Only hybrid cloud", "No resource pooling"], answer: 1, explain: "Provider pools resources and isolates tenants logically." },
  { q: "Elasticity vs scalability: elasticity is:", options: ["Long-term capacity planning", "Automatic rapid scale in/out to match demand", "Only scale up", "Manual hardware purchase"], answer: 1, explain: "Elasticity = automatic rapid provisioning; scalability = ability to scale." },
  { q: "Infrastructure as Code (IaC) tool that is cloud-agnostic:", options: ["AWS CloudFormation", "Terraform", "Azure ARM Templates", "GCP Deployment Manager"], answer: 1, explain: "Terraform supports AWS, Azure, GCP and more via providers." },
  { q: "Which is NOT one of the 6 R's of cloud migration?", options: ["Rehost", "Replatform", "Retire", "Reboot"], answer: 3, explain: "6 R's: Rehost, Replatform, Refactor, Repurchase, Retire, Retain. Reboot is not one." },
  { q: "Data lake vs data warehouse:", options: ["Lake = raw unstructured, Warehouse = structured curated for analysis", "They are identical", "Lake is only for SQL", "Warehouse stores raw video"], answer: 0, explain: "Lake holds raw data in any format; warehouse is structured and optimized for BI." },
  { q: "Amazon SQS is a:", options: ["Managed message queue for decoupling services", "Relational DB", "CDN", "Container registry"], answer: 0, explain: "SQS decouples microservices via queues." },
  { q: "EventBridge / SNS + SQS is used for:", options: ["Event-driven architecture", "Block storage", "Bare metal provisioning", "VPN only"], answer: 0, explain: "They enable event-driven, loosely coupled architectures." },
  { q: "Cloud-native principle does NOT include:", options: ["Containers", "Microservices", "DevOps & CI/CD", "Manual snowflake servers"], answer: 3, explain: "Cloud-native avoids manual snowflake servers; favors automation." },
  { q: "Vendor lock-in risk is mitigated by:", options: ["Using proprietary APIs only", "Using open standards, containers, multi-cloud abstractions", "Single provider contracts forever", "Avoiding IaC"], answer: 1, explain: "Open standards and portability reduce lock-in." }
];

let current = 0;
let score = 0;
let answers = []; // { chosen, correct }

const $ = s => document.getElementById(s);

function show(id){
  ["start-screen","quiz-screen","result-screen","review-screen"].forEach(x=>$(x).classList.add("hidden"));
  $(id).classList.remove("hidden");
}

function startQuiz(){
  current = 0; score = 0; answers = [];
  $("total-questions-start").textContent = QUESTIONS.length;
  show("quiz-screen");
  renderQuestion();
}

function renderQuestion(){
  const q = QUESTIONS[current];
  $("progress-label").textContent = `Question ${current+1} of ${QUESTIONS.length}`;
  $("score-live").textContent = `Score: ${score}`;
  $("progress-fill").style.width = `${((current)/QUESTIONS.length)*100}%`;
  $("question-text").textContent = q.q;
  const opts = $("options");
  opts.innerHTML = "";
  $("feedback").className = "feedback hidden";
  $("next-btn").classList.add("hidden");

  q.options.forEach((opt,i)=>{
    const btn = document.createElement("button");
    btn.className = "option";
    btn.innerHTML = `<span class="letter">${String.fromCharCode(65+i)}</span> ${opt}`;
    btn.onclick = ()=> selectAnswer(i, btn);
    opts.appendChild(btn);
  });
}

function selectAnswer(idx, btnEl){
  const q = QUESTIONS[current];
  const isCorrect = idx === q.answer;
  if(isCorrect) score++;
  answers[current] = { chosen: idx, correct: isCorrect };

  // disable all, highlight
  [...$("options").children].forEach((el,i)=>{
    el.classList.add("disabled");
    if(i===q.answer) el.classList.add("correct");
    if(i===idx && !isCorrect) el.classList.add("incorrect");
  });

  const fb = $("feedback");
  fb.classList.remove("hidden");
  if(isCorrect){
    fb.classList.add("correct");
    fb.textContent = `✓ Correct! ${q.explain}`;
  } else {
    fb.classList.add("incorrect");
    fb.textContent = `✗ Incorrect. ${q.explain}`;
  }
  $("score-live").textContent = `Score: ${score}`;
  $("progress-fill").style.width = `${((current+1)/QUESTIONS.length)*100}%`;
  $("next-btn").classList.remove("hidden");
  $("next-btn").textContent = current === QUESTIONS.length-1 ? "See Results →" : "Next →";
}

function next(){
  if(current < QUESTIONS.length-1){
    current++;
    renderQuestion();
  } else {
    showResults();
  }
}

function showResults(){
  show("result-screen");
  $("final-score").textContent = `${score}/${QUESTIONS.length}`;
  const pct = Math.round(score/QUESTIONS.length*100);
  $("final-percent").textContent = pct + "%";
  let msg = "";
  if(pct===100) msg="Perfect! Outstanding cloud mastery.";
  else if(pct>=80) msg="Great job! You really know cloud computing.";
  else if(pct>=60) msg="Good effort! Review the explanations and try again.";
  else if(pct>=40) msg="Not bad — keep studying cloud fundamentals!";
  else msg="Keep learning — cloud skills grow with practice!";
  $("final-message").textContent = msg;

  const breakdown = $("breakdown");
  breakdown.innerHTML = "";
  QUESTIONS.forEach((q,i)=>{
    const a = answers[i];
    const row = document.createElement("div");
    row.className = "breakdown-row " + (a?.correct ? "correct":"incorrect");
    row.innerHTML = `<span>Q${i+1}: ${q.q.slice(0,40)}${q.q.length>40?"…":""}</span><strong>${a?.correct?"✓":"✗"}</strong>`;
    breakdown.appendChild(row);
  });
}

function showReview(){
  show("review-screen");
  const list = $("review-list");
  list.innerHTML="";
  QUESTIONS.forEach((q,i)=>{
    const a = answers[i];
    const div = document.createElement("div");
    div.className="review-item";
    const chosenText = a ? q.options[a.chosen] : "—";
    const correctText = q.options[q.answer];
    div.innerHTML = `
      <span class="tag ${a?.correct?"correct":"incorrect"}">${a?.correct?"Correct":"Incorrect"}</span>
      <h3>${i+1}. ${q.q}</h3>
      <p><strong>Your answer:</strong> ${chosenText}</p>
      <p><strong>Correct answer:</strong> ${correctText}</p>
      <p>${q.explain}</p>
    `;
    list.appendChild(div);
  });
}

// events
$("start-btn").onclick = startQuiz;
$("next-btn").onclick = next;
$("restart-btn").onclick = startQuiz;
$("review-btn").onclick = showReview;
$("review-restart-btn").onclick = startQuiz;
$("back-to-result-btn").onclick = ()=> show("result-screen");

// init
$("total-questions-start").textContent = QUESTIONS.length;
