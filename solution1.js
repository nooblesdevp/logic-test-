function solution(record) {
  var answer = [];

  // looping
  record.forEach((item) => {
    const splitRecord = item.split(" ");

    const keyword = splitRecord[0];
    const uid = splitRecord[1];
    const name = splitRecord[2] ? splitRecord[2] : "";

    switch (keyword) {
      case "Enter": {
        // check user left+id then change left user nickname to new
        const existUser = answer.find((item) => item.user.uid === uid);
        if (existUser) {
            answer = answer.map((item) => {
            if (item.user.uid === uid) {
              return {
                ...item,
                user: { uid, name },
              };
            }

            return item;
          });
        }

        // Then push newUser+id to the room
        answer.push({
          user: { uid, name },
          message: "came in",
        });
        break;
      }
      case "Leave": {
        // Check user+make him leave the room
        const existIndex = answer.findIndex((item) => item.user.uid === uid);
        if (existIndex > -1) {
          const name = answer[existIndex].user.nickName;
          answer.push({
            user: { uid, name },
            message: "has left",
          });
        }
        break;
      }
      case "Change": {
        // Change user nickname to new one with same id
        answer = answer.map((item) => {
          if (item.user.uid === uid) {
            return {
              ...item,
              user: { uid, name },
            };
          }

          return item;
        });
        break;
      }
      default:
        break;
    }
  });

  return answer.map((item) => `${item.user.name} ${item.message}`);
}

// console.log(solution);
console.log(solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"]));
