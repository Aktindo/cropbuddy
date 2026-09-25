// Central domain content for the CropBuddy landing page.
// Kept separate from components so copy can be reviewed / edited independently.

export const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Diagnosis Workflow", href: "#workflow" },
  { label: "System Architecture", href: "#architecture" },
  { label: "IPM Strategy", href: "#ipm" },
  { label: "Outbreak Radar", href: "#radar" },
  { label: "Business Model", href: "#business" },
];

export const heroMetrics = [
  { value: "380ms", label: "On-device inference speed" },
  { value: "<12.8MB", label: "Model footprint" },
  { value: "100%", label: "Offline capability" },
  { value: "22", label: "Indian languages via Bhashini" },
];

export const comparisonRows = [
  {
    axis: "Inference mode",
    conventional: "Cloud-dependent, needs signal",
    cropbuddy: "100% edge-native — runs on ₹4,000 devices",
  },
  {
    axis: "Detection timing",
    conventional: "Reactive, after visible onset",
    cropbuddy: "Predictive, 7–14 days ahead of outbreak",
  },
  {
    axis: "Remediation guidance",
    conventional: "Generic chemical ad placements",
    cropbuddy: "Tiered: bio-first, then precision chemical",
  },
  {
    axis: "Accessibility",
    conventional: "Text-only interface, English/Hindi",
    cropbuddy: "Voice-first UI across 22 vernacular languages",
  },
  {
    axis: "Epidemiology",
    conventional: "Isolated, single-farm queries",
    cropbuddy: "Spatio-temporal outbreak mapping via ST-GNN",
  },
];

export const workflowSteps = [
  {
    step: "01",
    title: "Frame capture",
    description:
      "Camera auto-calibrates exposure and guides the farmer to the correct distance from the leaf before a frame is locked.",
  },
  {
    step: "02",
    title: "On-device edge inference",
    description:
      "An INT8-quantized TFLite model runs entirely on the handset, returning a diagnosis in roughly 380ms with no network call.",
  },
  {
    step: "03",
    title: "Visual diagnosis",
    description:
      "Infected zones are highlighted as a heatmap overlay, alongside an estimated yield-loss percentage for the affected patch.",
  },
  {
    step: "04",
    title: "Actionable remediation",
    description:
      "A two-tier treatment plan is generated: a bio/organic option first, a precision-scaled chemical option second.",
  },
];

export const remediationTiers = [
  {
    tier: "Tier 1 — Bio / Organic",
    detail: "Neem oil emulsion (10,000 ppm) combined with Trichoderma viride soil application.",
  },
  {
    tier: "Tier 2 — Precision Chemical",
    detail: "CIBRC-approved molecule, dosage scaled precisely to the farmer's land size and severity index.",
  },
];

export const architectureLayers = [
  {
    layer: "Data acquisition",
    items: ["Farmer camera frames", "Solar-powered ESP32 IoT nodes", "Sentinel-2 satellite imagery", "KVK ground-truth data"],
  },
  {
    layer: "Offline edge runtime",
    items: ["Flutter + TFLite runtime", "INT8 MobileViT / YOLOv8-Nano", "Local SQLite cache", "Bhashini STT/TTS engine"],
  },
  {
    layer: "Cloud & pipeline",
    items: ["AWS Lambda functions", "PostGIS geospatial database", "Spatio-Temporal Graph Neural Network", "Amazon SageMaker training"],
  },
  {
    layer: "Ecosystem",
    items: ["KVK agronomist expert portal", "Government early-warning broadcasts", "Agri-input analytics dashboard"],
  },
];

export const outbreakExamples = [
  { region: "Punjab", crop: "Wheat", threat: "Yellow rust", trend: "+18% week-over-week" },
  { region: "Maharashtra", crop: "Cotton", threat: "Pink bollworm", trend: "+9% week-over-week" },
  { region: "Karnataka", crop: "Tomato", threat: "Early blight", trend: "+6% week-over-week" },
];

export const alertChannels = [
  { channel: "In-app push", detail: "Real-time alerts inside the CropBuddy app for connected users." },
  { channel: "Gupshup SMS gateway", detail: "Bulk SMS broadcasts to registered farmers within an outbreak radius." },
  { channel: "IVR / USSD fallback", detail: "Voice call and USSD menu access for basic feature phones with no data plan." },
];

export const techDeepDive = [
  {
    title: "Taylor expansion structural pruning",
    detail: "Redundant attention heads are identified via Taylor-expansion importance scoring and removed before quantization.",
  },
  {
    title: "Post-training quantization (PTQ)",
    detail: "Full INT8 post-training quantization shrinks the base model from 140MB down to under 12.8MB with minimal accuracy loss.",
  },
  {
    title: "Synthetic data generation",
    detail: "A CycleGAN pipeline augments training frames with varied lighting, soil splatter, and crop growth stages.",
  },
];

export const businessTiers = [
  {
    tier: "B2G — Government SaaS",
    audience: "State Agriculture Departments & PM-KISAN extension network",
    detail: "Licensed deployment for state-run advisory programs, with outbreak-radar dashboards for extension officers.",
  },
  {
    tier: "B2B — Agri Data Engine",
    audience: "Crop insurers & input supply chains",
    detail: "Anonymized epidemiology data licensed for insurance underwriting and supply-chain demand planning.",
  },
  {
    tier: "B2C — Freemium",
    audience: "Smallholder farmers & commercial growers",
    detail: "Free core diagnostics for smallholders; premium yield analytics for commercial plantations.",
  },
];

export const ipmFormula = {
  title: "Precision dosage model",
  variables: [
    { symbol: "Land Area", meaning: "Field size in acres, entered or GPS-measured" },
    { symbol: "Standard Field Rate", meaning: "Manufacturer's recommended rate per acre" },
    { symbol: "Dilution Ratio", meaning: "Water-to-chemical ratio for the spray tank" },
    { symbol: "Severity Index Factor", meaning: "0.4–1.2 multiplier from the on-device diagnosis" },
  ],
};

export const footerInfo = {
  problemStatement: "Smart India Hackathon — Ministry of Agriculture & Farmers Welfare",
  psId: "SIH Problem Statement — Predictive Crop Health Advisory for Smallholder Farmers",
  partners: ["Krishi Vigyan Kendra (KVK) Network", "State Agriculture Departments"],
};
