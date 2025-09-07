<p align="center">
  <img src="https://strx-hackathon.vercel.app/_next/image?url=%2Flogo.png&w=640&q=75" alt="STRX Logo" width="300">
</p>

# STRX - AI-Powered STR Compliance

[![Hackathon](https://img.shields.io/badge/BuildToConvert-AGIV_Ventures-blue)](https://www.agiventures.vc/)
[![Tech Stack](https://img.shields.io/badge/Tech-Solace_|_Next.js_|_Vercel-black)](https://vercel.com)

STRX is an AI-powered compliance and lead-generation engine that turns public web data into actionable, board-ready briefs for luxury condos.

---

## 📺 Demo Video & Live Site

**Watch our 2.5-minute submission video to see STRX in action!**

[➡️ Watch on Youtube](https://www.youtube.com/watch?v=dcMI6_xF27I)

**[➡️ View the Live Demo on Vercel](https://strx-hackathon.vercel.app)**

> **Note on the Live Demo:**
> To ensure a seamless and fast-paced demo for judging, our UI visualizes a pre-rendered execution of our Solace Agent Mesh workflow. The results and artifacts shown are from a successful, completed run, showcasing the full power of our system.

---

## 🎯 The Problem

Luxury condo boards face a constant battle with unauthorized short-term rentals. They bring security risks, insurance liabilities, and resident complaints. Finding and proving these violations is a manual, slow, and often impossible task for busy property managers.

## ✨ The Solution

Our solution is STRX. We use an event-driven system of 12 specialized AI agents to turn scattered public web signals into actionable intelligence. We don't just find listings; we score them with explainable heuristics, compile evidence, add bylaw context, and deliver a board-ready brief—all orchestrated through the Solace Agent Mesh.

---

## 🚀 Key Features

- **🤖 Orchestrated Product Workflow:** An end-to-end _Discovery-to-Brief_ pipeline that turns public data into a one-page compliance report with everything a board needs to act.
- **📈 Automated Outbound Workflow:** A _Region-to-Revenue_ engine that uses our own product to identify high-risk buildings, find contacts, and send personalized outreach to generate leads.
- **✨ Animated Agentic Workflow UI:** A beautifully animated interface that visualizes the complex, multi-agent backend process in simple, easy-to-ingest steps.

---

## 🛠️ Tech Stack

In the true spirit of a 'build to convert' hackathon, we leveraged a suite of cutting-edge tools to accelerate our development.

- **Backend & Orchestration:** Solace Agent Mesh
- **Frontend:** Next.js, React, Tailwind CSS
- **Deployment:** Vercel
- **Public Data:** Brightdata
- **AI & Development:** Cursor, GitHub Copilot, ChatGPT (for language tasks)

---

## 🏛️ Architecture Overview

The core of STRX is a multi-agent system built on the **Solace Agent Mesh**. An **Orchestrator Agent** initiates and manages workflows by publishing events to specific topics. Each of our 12 specialized agents subscribes to the topics relevant to its function, performs its task, and then shares its output as a new artifact, publishing an event to trigger the next agent in the sequence. This event-driven, A2A architecture ensures our system is resilient, scalable, and auditable.

---

## ⚙️ How It Works

### Workflow 1: Discovery-to-Brief

1.  **Collect:** The `Listings Collector` gathers public STR data for a target city.
2.  **Match:** The `Matcher Agent` associates listings to a specific building using geospatial and text signals.
3.  **Score:** The `Scoring Agent` applies explainable heuristics to assign a 0-100 confidence score.
4.  **Evidence & Policy:** The `Evidence` and `Policy` agents compile public proof and attach relevant bylaw context.
5.  **Report:** The `Report Agent` generates the final one-page HTML/PDF brief.

### Workflow 2: Region-to-Revenue

1.  **Discover:** The `Building Collector` identifies target luxury condos in a region.
2.  **Analyze:** The system runs **Workflow 1** for each building.
3.  **Rank:** The `Viability Score Agent` ranks buildings based on STR risk to prioritize outreach.
4.  **Find Contacts:** The `Contact Info Agent` retrieves the best public contacts for high-priority buildings.
5.  **Engage:** The `Outreach Agent` sends personalized, tracked emails with a sample brief to generate meetings.

---

## 🤖 The 12 Solace Mesh Agents

| Agent                       | Description                                                                             |
| --------------------------- | --------------------------------------------------------------------------------------- |
| **STRX Orchestrator**       | Coordinates workflows, manages agent handoffs, and standardizes artifact creation.      |
| **STR Listings Collector**  | Gathers public short-term rental listings and outputs a normalized dataset.             |
| **Matcher Agent**           | Associates listings to specific buildings using proximity and name-based signals.       |
| **Scoring Agent**           | Assigns an explainable 0-100 likelihood score and confidence tier to each listing.      |
| **Evidence Agent**          | Compiles public evidence snippets and links and flags items for human review.           |
| **Policy Agent**            | Adds city and building policy context with cited references and recommended next steps. |
| **Report Agent**            | Generates a one-page Building Risk Brief (HTML/PDF) summarizing all findings.           |
| **Building Collector**      | Produces a curated list of target luxury condos for a given city.                       |
| **Luxury Building Context** | Enriches buildings with aliases and unique amenities to improve matching accuracy.      |
| **Contact Info Agent**      | Identifies the best public contact(s) for each building (property management or board). |
| **Outreach Agent**          | Sends personalized, compliant emails with brief links and tracks engagement outcomes.   |
| **Viability Score Agent**   | Ranks buildings for sales outreach based on detection strength and contact quality.     |

---

## 🏁 Getting Started

To run this project locally:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/sashkode/strx.git
    cd strx
    ```

2.  **Install dependencies:**

    ```bash
    pnpm install
    ```

3.  **Set up environment variables:**
    Create a `.env.local` file and add any necessary API keys (e.g., for Brightdata).

4.  **Run the development server:**

    ```bash
    pnpm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

---

## 🗺️ Future Roadmap

- **🚀 Activate Outbound:** Fully activate the automated outbound workflow to engage our first pilot customers.
- **📈 Launch Subscriptions:** Roll out weekly and monthly monitoring subscriptions for property managers.
- **🔗 Direct Integrations:** Expand to new cities (Toronto) and integrate directly with property management software like Yardi and AppFolio.

---

## 👥 The Team

- **[Alex D'Aoust]** - Product Design & Engineering - [@GitHub](https://github.com/sashkode)
- **[Félix Poitras]** - Product Design & Engineering - [@GitHub](https://github.com/fpoitras)

