from src.insights.jobs import ProcessJobs
from typing import List


class ProcessIndustries(ProcessJobs):
    def __init__(self):
        super().__init__()

    def get_unique_industries(self) -> List[str]:
        result = self.jobs_list
        industries = list()
        for job in result:
            if job['industry'] not in industries and job['industry'] != '':
                industries.append(job['industry'])
        return industries
