from prompt_generator import PromptGenerator
from langchain.chains import create_sql_query_chain
from llms import GoogleLLM
from langchain.schema.runnable import RunnablePassthrough
from langchain_core.runnables import RunnableLambda
from langchain_core.output_parsers import StrOutputParser

from router import ChainRouter


# self.__llm = GoogleLLM('gemini-2.0-flash-lite', 0.0).get_llm()
# self.__llm = GoogleLLM('gemini-2.5-pro-exp-03-25', 0.0).get_llm()
# self.__llm = GoogleLLM('gemini-2.0-flash', 0.0).get_llm()

# Model names
GEMINI_2_5 = "gemini-2.5-flash"



class ChatBot:

    def __init__(self):
        self.__prompt_generator = PromptGenerator()
        self.__llm = GoogleLLM(GEMINI_2_5, 0.0).get_llm()
        self.__user_name = None
        self.__run()

    def __get_router(self):
        classification_prompt = self.__prompt_generator.get_classification_prompt()
        classification_chain = classification_prompt | self.__llm | StrOutputParser()

        routine_prompt = self.__prompt_generator.get_routine_prompt()
        routine_chain = routine_prompt | self.__llm | StrOutputParser()

        latest_activity_prompt = self.__prompt_generator.get_activities_prompt()
        activity_chain = latest_activity_prompt | self.__llm | StrOutputParser()

        return ChainRouter(classification_chain, routine_chain, activity_chain, self.__user_name)

    def __get_full_chain(self):
        return (RunnablePassthrough.assign(classification=lambda x: self.__router.route_query(x)) |
                RunnableLambda(
                    lambda x:
                    (self.__router.handle_retrieval(x) if x["classification"] == "retrieval"
                     else self.__router.handle_routine(x) if x["classification"] == "routine"
                    else self.__router.handle_other(x))))

    def __run(self):
        full_chain = self.__get_full_chain()
        self.__user_name = input("Enter your username > ")
        self.__router = self.__get_router()

        while True:
            question = input("Enter your question > ")

            if question.lower() == "quit":
                break

            result = full_chain.invoke({"question": question})
            print(result)


if __name__ == "__main__":
    ChatBot()
