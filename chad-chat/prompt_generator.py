from langchain_core.prompts import ChatPromptTemplate, PromptTemplate, ChatMessagePromptTemplate


class PromptGenerator:

    @staticmethod
    def get_routine_prompt():
        routine_prompt = ChatPromptTemplate.from_template(
            """
                Give a response like you were {personality} and you are an experienced personal trainer. 
                The following question is asking you to give a gym routine:

                <question>
                {question}
                </question>

                The following data provides the user personal information and goal:
                <data>
                {data}
                <data>
                
                The following data provides the user latest activities, so you can answer in a more personalized way:
                <activities>
                {activities}
                <activities>
                
                Use all of this information, so you can answer in a more personalized way.

                Provide a personalized routine for the user. Mention his name for more familiarity. 
                According to his current condition and goals make sure to give sets, weights and repetitions the user should do. 
            """
        )
        return routine_prompt

    @staticmethod
    def get_classification_prompt():
        classification_prompt = PromptTemplate.from_template(
            """
                You are an experienced personal trainer. This is a chat for a gym and training topics only.
                Classify the following question as either:
                - "retrieval" (if it requires looking up data about past activities)
                - "routine" (if it requires you to provide a routine for the day)
                - "other" (if unrelated to the above)

                <question>
                {question}
                </question>

                Respond ONLY with one of these three words: retrieval, routine, or other.
            """
        )
        return classification_prompt

    @staticmethod
    def get_activities_prompt():
        activities_prompt = PromptTemplate.from_template(
            """
                You are an experienced personal trainer with a personality of {personality}.
                The following data provides the user personal information and goal:
                <data>
                {data}
                <data>
                
                The following data provides the user latest activities, so you can answer in a more personalized way:
                <activities>
                {activities}
                <activities>
                
                Use all of this information, so you can answer in a more personalized way.
                Answer a summary of the latest activities, take into consideration the dates (compare them with today) and praise or scold accordingly.
                Try to keep the user motivated.
            """
        )
        return activities_prompt
