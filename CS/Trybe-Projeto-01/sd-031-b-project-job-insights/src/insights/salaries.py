from typing import Union, List, Dict
from src.insights.jobs import ProcessJobs


class ProcessSalaries(ProcessJobs):
    def __init__(self):
        super().__init__()

    def get_max_salary(self) -> int:
        max_salaries = [
            int(job['max_salary'])
            for job in self.jobs_list
            if 'max_salary' in job and job['max_salary'].isdigit()
        ]
        return max(max_salaries) if max_salaries else 0

    def get_min_salary(self) -> int:
        min_salaries = [
            int(job['min_salary'])
            for job in self.jobs_list
            if 'min_salary' in job and job['min_salary'].isdigit()
        ]
        return min(min_salaries) if min_salaries else 0

    def matches_salary_range(self, job: Dict, salary: Union[int, str]) -> bool:
        if 'min_salary' not in job or 'max_salary' not in job:
            raise ValueError
        min_salary = job['min_salary']
        max_salary = job['max_salary']
        if type(salary) not in (int, str):
            raise ValueError
        if not str(min_salary).isdigit() or not str(max_salary).isdigit():
            raise ValueError
        if int(min_salary) > int(max_salary):
            raise ValueError
        return int(min_salary) <= int(salary) <= int(max_salary)

    def filter_by_salary_range(
        self, jobs: List[dict], salary: Union[str, int]
    ) -> List[Dict]:
        pass
