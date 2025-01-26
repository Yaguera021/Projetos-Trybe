import csv
from typing import List, Dict


class ProcessJobs:
    def __init__(self) -> None:
        self.jobs_list = list()

    def read(self, file_path: str) -> List[Dict]:
        with open(file_path, newline='') as file:
            reader = csv.DictReader(file)
            for row in reader:
                self.jobs_list.append(row)
            return self.jobs_list

    def get_unique_job_types(self) -> List[str]:
        return list({job['job_type'] for job in self.jobs_list} - {None})

    def filter_by_multiple_criteria(self, jobs_list, f) -> List[dict]:
        filtered = []
        for job in jobs_list:
            if (
                job["industry"] == f["industry"]
                and job["job_type"] == f["job_type"]
            ):
                filtered.append(job)
        return filtered
