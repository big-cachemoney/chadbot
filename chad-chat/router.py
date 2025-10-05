from typing import Literal, Dict
from langchain.agents.agent import AgentExecutor

class ChainRouter:
    def __init__(self, classifier_chain, routine_chain):
        self.__classifier_chain = classifier_chain
        # self.__sql_agent = sql_agent
        self.__routine_chain = routine_chain
        # self.__set_up_sql_agent = sql_set_up_agent

    def route_query(self, info: Dict) -> Literal["retrieval", "prediction", "other"]:
        question = info["question"]
        classification = self.__classifier_chain.invoke({"question": question})
        return classification

    def handle_retrieval(self, info: Dict):
        # get SQL data here
        question = info["question"]
        # return self.__sql_agent.invoke({"input": question})
        return None

    def handle_routine(self, info: Dict):
        question = info["question"]
        # First get raw_data from SQL
        # set_up_data = self.__set_up_sql_agent.invoke({"input": question})
        data = {}

        # Then analyze it
        return self.__routine_chain.invoke({"question": question, "data": data})

    def handle_other(self, info: Dict):
        return "I don't know"
