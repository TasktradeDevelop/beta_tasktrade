// 미션 목록창에 한정적으로 관련된 함수
// missions-main.js - Handles modals for missions categories

document.addEventListener("DOMContentLoaded", function () {
    function openMissionModal(missionType) {
        const titles = {
            "hot-missions": "최다 조회수 미션",
            "high-reward-missions": "높은 리워드 미션",
            "new-missions": "새로운 미션",
            "ad-missions": "기업 및 광고 미션"
        };
        const descriptions = {
            "hot-missions": "이 미션은 가장 많은 조회수를 기록했습니다!",
            "high-reward-missions": "높은 보상을 제공하는 미션들입니다.",
            "new-missions": "새롭게 추가된 미션을 확인하세요.",
            "ad-missions": "기업에서 제공하는 특별한 광고 미션입니다."
        };

        const title = titles[missionType] || "미션 상세 정보";
        const text = descriptions[missionType] || "이 미션에 대한 정보가 없습니다.";

        modalUtils.openModal(title, text);
    }

    ["hot-missions", "high-reward-missions", "new-missions", "ad-missions"].forEach((id) => {
        document.getElementById(id).addEventListener("click", function () {
            openMissionModal(id);
        });
    });
});
