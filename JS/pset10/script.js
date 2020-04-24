// function UserCard(keyNumber) {
//     let key = keyNumber;
//     let balance = 100;
//     let transactionLimit = 100;
//     let historyLogs = [];
//
//     function getCardOptions() {
//         return `key:${key},\n balance:${balance},\ntransactionLimit:${transactionLimit},\n historyLogs:${JSON.stringify(historyLogs)}`;
//     }
//
//     function putCredits(money) {
//         balance += money;
//         let d = new Date();
//         let date = d.toLocaleDateString();
//         let time = d.toLocaleTimeString();
//         addToHistoryLogs('putCredits', money, date + ', ' + time);
//     }
//
//     function takeCredits(money) {
//         let d = new Date();
//         let date = d.toLocaleDateString();
//         let time = d.toLocaleTimeString();
//         if (money <= transactionLimit && money <= balance) {
//             balance -= money;
//             addToHistoryLogs('takeCredits', money, date + ', ' + time);
//         } else {
//             console.log("ERROR");
//         }
//     }
//
//     function setTransactionLimit(money) {
//         transactionLimit = money;
//     }
//
//     function transferCredits(card, money) {
//         let d = new Date();
//         let date = d.toLocaleDateString();
//         let time = d.toLocaleTimeString();
//         if (money <= transactionLimit && money <= balance) {
//             card.putCredits(money);
//             balance -= money * 1.005;
//             addToHistoryLogs('transferCredits', money, date + ', ' + time);
//         } else {
//             console.log("ERROR");
//         }
//     }
//
//     function addToHistoryLogs(operationType, credits, operationTime) {
//         historyLogs.push({operationType, credits, operationTime});
//     }
//
//     function getKeyUSerCard() {
//         return key;
//     }
//
//     return {
//         getCardOptions,
//         putCredits,
//         takeCredits,
//         setTransactionLimit,
//         transferCredits,
//         getKeyUSerCard
//     }
// }
//
//
// const userCard1 = UserCard(1);
// const userCard2 = UserCard(2);
// userCard1.putCredits(200);
// userCard1.takeCredits(50);
// userCard1.setTransactionLimit(1000);
// userCard2.transferCredits(userCard1, 50);
// console.log(userCard1.getCardOptions());
// console.log(userCard2.getCardOptions());
//
// class UserAccount {
//     constructor(name) {
//         this.name = name;
//         this.cards = [];
//
//     }
// }
//
// UserAccount.prototype.addCard = function () {
//     if (this.cards.length < 3) {
//         this.cards.push(new UserCard(this.cards.length + 1));
//     } else {
//         console.log('err (cards > 3)');
//     }
// };
// UserAccount.prototype.getCardByKey = function (num) {
//     let card;
//     this.cards.find((value) => {
//         if (value.getKeyUSerCard() === num) {
//             card = value;
//         }
//
//     });
//     return card;
// };
//
// let user1 = new UserAccount('Andriy');
// user1.addCard(userCard1);
// user1.addCard(userCard2);
// user1.addCard(userCard2);
//
// console.log(user1);
//
// console.log(user1.getCardByKey(2).getCardOptions());
//
















