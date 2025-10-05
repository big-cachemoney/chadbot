from langchain_core.prompts import ChatPromptTemplate, PromptTemplate


class PromptGenerator:

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
    def get_routine_prompt():
        routine_prompt = ChatPromptTemplate.from_template(
            """
                You are an experienced personal trainer. The following question is asking you to give a gym routine:

                <question>
                {question}
                </question>

                The following data provides the user personal information and goal, so you can answer in a more personalized way:
                <data>
                {data}
                <data>

                Provide a personalized routine for the user. Mention his name for more familiarity. 
                According to his current condition and goals make sure to give sets, weights and repetitions the user should do. 
            """
        )
        return routine_prompt

    # @staticmethod
    # def get_prediction_prompt():
    #     prediction_prompt = ChatPromptTemplate.from_template(
    #         """
    #             You are an experienced data analyst. The following question is asking you to forecast sales:
    #
    #             <question>
    #             {question}
    #             </question>
    #
    #             The following set_up_data has two parts:
    #             - a description of the set_up_data retrieved which is provided between the tags ########### Start of Description ########### and ########### End of Description ###########
    #             - the data retrieved for forecasting which is provided between the tags ########### Start of data_retrieved ########### and ########### End of data_retrieved ###########
    #
    #             <set_up_data>
    #             {set_up_data}
    #             </set_up_data>
    #
    #             Provide an optimistic and a pessimistic scenario. Explain briefly (3 lines at most) what approached was used for each scenario. Do not extrapolate or interpolate data.
    #             Using the set_up_data you are given, implement common business approaches. When provided, use the popularity score to help you make your prediction.
    #             The popularity score ranges from 0 to 100 and is a measure of how popular a product is within the company. i.e.:
    #                 100 = Top-selling product (≥75th percentile)
    #                 75 = Above-average (50th-75th percentile)
    #                 50 = Median performer
    #                 25 = Below-average (25th-50th percentile)
    #                 0 = Lowest sales (<25th percentile)
    #             Key points: Scores compare products within the same month/year (not across time). A score of 80 means the product outsold 80% of peers that month.
    #             Products with consistent high score mean they are rising stars, stocks should be increased. Products with consistent low scores need actions or be discontinued.
    #         """
    #     )
    #     return prediction_prompt
