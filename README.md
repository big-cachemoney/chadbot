## Chadbot

### Inspiration
Our inspiration came from the frustration of going to the gym as a beginner — you don’t know what routine to follow. Instructors may forget details or have limited time, while personal trainers are expensive. Many people now use AI for training, but there’s often no real follow-up or integration between personal goals, routines, and a trainer-like experience.

### What it does
- **Personalized routines**: Generates daily workout plans tailored to your goals and activity level.
- **Character-driven motivation**: Adapts the tone and style of a chosen personality for extra motivation.
- **Value proposition**: True personalization through context-aware responses that consider your latest activities and profile.

### How we built it
- **LLM core**: A CLI chatbot powered by LangChain and Gemini (`langchain-google-genai`).
- **Data**: Retrieves user profile and activities from Postgres (Aiven) to inform responses.
- **API & UI**: Flask-based REST API (`chadbot-api`) and a Next.js UI (`chadbot-ui`) as the MVP.
- **Prompting**: Structured chains (classification, routine, activity-summary) via LangChain templates.

### Challenges we ran into
- **Scope creep**: Feature scope expanded during discussions and exceeded the time we had.
- **Integration debt**: Limited time to fully integrate the LLM with the UI and API end-to-end.

### Accomplishments that we're proud of
- **Working LLM CLI**: A functioning, personalized CLI chatbot built quickly.
- **MVP UI**: Delivered a usable interface within tight time constraints.

### What we’ve learned
- **Scope first**: Clearly define scope early to avoid runaway complexity.
- **LangChain proficiency**: Built multi-step chains for Gemini, including classification and retrieval-augmented prompts.

### What’s next
- **End-to-end integration**: Connect the Chadbot LLM to the UI for an interactive chat experience.
- **Richer data**: Expand activity tracking and user profiling for more precise recommendations.
- **Production hardening**: Auth, observability, and better error handling across services.

### Built With
- **Gemini (Google Generative AI)**
- **LangChain**
- **Flask** (API)
- **Next.js** (UI)
- **PostgreSQL** (Aiven)