def study_schedule(permanence_period, target_time):
    try:
        student = 0
        for entry, exit in permanence_period:
            if entry <= target_time <= exit:
                student += 1
        return student
    except TypeError:
        return None
