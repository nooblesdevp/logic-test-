function solution(N, users) {
    var answer = [];
    let total = users.length

    for (let currentStage = 1; currentStage <= N; currentStage++) {
        const currentStages = users.filter(answer => answer === currentStage);
        const currentTotal = currentStages.length;
        answer.push({
            answer: currentStage,
            failure_rate: currentTotal / total
        });

        total = total - currentTotal;
    }

    return answer
        .sort((left, right) =>
            left.failure_rate === right.failure_rate ? 0
                : left.failure_rate > right.failure_rate ? -1 : 1)
        .map(item => item.answer);
}

console.log(solution(4, [4,4,4,4,4]));