from typing import Literal, Dict
from aiven_database import run_query
from queries import get_last_activities, get_user_info, get_chad_personality


class ChainRouter:
    def __init__(self, classifier_chain, routine_chain, activity_chain, user_name: str):
        self.__classifier_chain = classifier_chain
        self.__routine_chain = routine_chain
        self.__activity_chain = activity_chain
        # Get raw_data from SQL
        self.__user_data = run_query(get_user_info(user_name))
        self.__user_activities = run_query(get_last_activities(user_name))
        self.__chad_personality = run_query(get_chad_personality(user_name))

    def route_query(self, info: Dict) -> Literal["retrieval", "prediction", "other"]:
        question = info["question"]
        classification = self.__classifier_chain.invoke({"question": question})
        return classification

    def handle_retrieval(self, info: Dict):
        # get SQL data here
        question = info["question"]
        # return self.__sql_agent.invoke({"input": question})
        return self.__activity_chain.invoke(
            {"question": question, "activities": self.__user_activities, 'personality': self.__chad_personality, 'data': self.__user_data})

    def handle_routine(self, info: Dict):
        question = info["question"]
        return self.__routine_chain.invoke(
            {"question": question, "activities": self.__user_activities, 'personality': self.__chad_personality, 'data': self.__user_data})

    def handle_other(self, info: Dict):
        return "I don't know"
