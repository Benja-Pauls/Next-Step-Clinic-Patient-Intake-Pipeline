# Next Step Clinic Patient Intake Pipeline Hackathon Project

This is the repository for all Large Language Model (LLM) experiments with the "Skippy" algorithm developed as part of the 2023 MSOE HacksGiving event on November 17th, 2023, and November 18th, 2023. This "Skippy" algorithm allows any data to be embedded for easy accessing and model citation, allows easy contant-tuning for changes to the responses from the LLM, and also receives great respones for a question-thought-response framework with an open-source LLM [Llama.cpp](https://github.com/ggerganov/llama.cpp).

Llama.cpp was chosen as a demonstrative experiment due to its small size (allowing it to be run on many consumer-grade hardware), Llama's proficiency in chat-bot related tasks, and its small size due to its implementation in C/C++ without the use of external ML/Tensor libraries. Lessoning the amount of external libraries used also increases the security of this system.

This solution has been proven to work using a basic T4 ("teaching") node on the [MSOE ROSIE Supercomputer](https://www.msoe.edu/about-msoe/news/details/meet-rosie/). It also won first place at [HacksGiving 2023](https://www.msoe.edu/about-msoe/news/details/inaugural-hacksgiving-hackathon-uses-generative-a-i-to-support-nonprofit-clinic/).

A diagram of the full solution, included in this GitHub repository, is outlined below:<br/>
![image](https://github.com/Benja-Pauls/Next-Step-Clinic-Patient-Intake-Pipeline/assets/73416124/a3bc00f8-c949-49ea-a5cc-7b0c88a7060a)

The final PowerPoint presentation used to present our solution at the 2023 MSOE "HacksGiving" Hackathon competition can be found here: https://msoe365-my.sharepoint.com/:p:/g/personal/brucee_msoe_edu/EbBnPWX5MvlDlHgRL1kfMnsBLle2l-D4CgiVtWaxA9cGhw?e=oavcoV

## To Start Frontend
1. Go to frontend directory
2.  `npm run build`
3. Start the frontend with `npm start`

<br><br>

## To Start Backend
1. Go to backend directory 
2. `flask run -p 5001`# MSOE HacksGiving "Skippy" LLM Experiments


