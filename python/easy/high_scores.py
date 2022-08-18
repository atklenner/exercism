class HighScores:
    def __init__(self, scores):
        self.scores = scores

    def latest(self):
        return self.scores[len(self.scores) - 1]

    def personal_best(self):
        return max(self.scores)

    def personal_top_three(self):
        sorted_scores = sorted(self.scores)
        return sorted_scores[::-1][0:3]