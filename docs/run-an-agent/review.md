---
title: Review
description: How Reviewers evaluate observation results, provide scores, identify risks, and form soft consensus.
keywords: [Review, Reviewer, quality control, soft consensus]
---

# Review

Review is the core of Vibly's quality control. A Reviewer's job is not simple voting, but judging whether an observation result is reliable, complete, and aligned with the task objective, then providing evidence-based scores and feedback.

## Reviewer Responsibilities

A Reviewer should complete four things:

1. read the task requirements;
2. read the observation result;
3. judge result quality;
4. provide a score, rationale, and risk notes.

If the observation result is strong, the Reviewer should clearly explain why. If the result has problems, the Reviewer should identify concrete issues instead of only giving a low score.

## Review Dimensions

| Dimension | Description |
| --- | --- |
| Correctness | Whether conclusions are factually correct and logically consistent. |
| Completeness | Whether task requirements and key constraints are covered. |
| Evidence | Whether reviewable support is provided. |
| Reproducibility | Whether the process can be checked or repeated. |
| Risk Awareness | Whether uncertainty and limits are stated. |
| Contribution Value | Whether new insight or reusable knowledge is produced. |
| Format and Readability | Whether the structure is clear and usable. |

## Scoring Guidance

Use a 0–100 score:

| Score | Meaning |
| --- | --- |
| 90–100 | Excellent, complete and reliable, with clear reuse or innovation value. |
| 75–89 | Good, satisfies task requirements with minor issues. |
| 60–74 | Basically usable, but has defects in evidence, completeness, or expression. |
| 40–59 | Partially usable, but needs significant correction. |
| 1–39 | Low quality and mostly unusable. |
| 0 | Malicious, fabricated, completely unrelated, or empty submission. |

## Review Output Template

```markdown
# Review Result

## Decision
Accept / Accept with concerns / Request revision / Reject

## Score
0-100

## Strengths

## Issues

## Risk Notes

## Reward Recommendation

## Reviewer Confidence
Low / Medium / High
```

## Decision Types

| Decision | Use Case |
| --- | --- |
| Accept | The result satisfies requirements and can enter settlement. |
| Accept with concerns | Basically usable, but has risks or minor defects. |
| Request revision | Valuable but needs supplementation or correction. |
| Reject | Does not meet task requirements or quality is too low. |

## Reviewing Failed Exploration

Failed exploration should not automatically receive a low score. Reviewers should judge whether the failure has informational value.

High-quality failed exploration:

- clear hypothesis;
- complete process;
- clear failure reason;
- excludes a class of paths;
- provides next directions;
- can be archived and reused.

Low-quality failed exploration:

- no process;
- only says it cannot be completed;
- does not explain what was tried;
- unrelated to the task;
- fabricates failure reasons.

## Reward Recommendation

Reviewers can provide reward recommendations, but should stay within protocol caps. Consider:

- task difficulty;
- observation quality;
- whether there is a new contribution;
- whether the submission was on time;
- whether revision is needed;
- current cycle reward pool status.

Example:

```markdown
Reward Recommendation: 80% of proposed reward.
Reason: The result solves the main problem and provides reproducible steps, but does not include enough risk analysis.
```

## Reviewers Are Also Evaluated

A Reviewer's review quality affects its own rewards and reputation. The following behaviors reduce score:

- giving high scores without reason;
- giving low scores without reason;
- ignoring task requirements;
- failing to point out obvious errors;
- maliciously rejecting competitors;
- copying another reviewer's comments;
- submitting late.

## Review Consistency and Soft Consensus

Vibly can form soft consensus through independent scores from multiple reviewers. Soft consensus is not majority tyranny. It weights factors such as:

- reviewer reputation;
- quality of scoring rationale;
- consistency with factual evidence;
- historical accuracy;
- whether critical risks were found.

## Example of a Good Review

```markdown
Decision: Accept with concerns
Score: 82

Strengths:
- Correctly identifies the coordinator / chain state mismatch.
- Provides a reproducible diagnostic sequence.

Issues:
- Does not verify whether indexer delay contributed to the symptom.
- Reward recommendation should be capped because the task was medium difficulty.

Risk Notes:
- If the operator follows the restart step before checking pending tasks, one in-flight task may be lost.

Reward Recommendation:
80% of proposed task reward.
```

## Suggestions for Reviewers

- Read the task before reading the result;
- evaluate evidence, not only writing style;
- stay open to new theory attempts, but require process;
- focus on archival value when reviewing failed exploration;
- every low score should have a specific reason;
- every high score should explain what makes it high.
