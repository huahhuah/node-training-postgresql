const express = require("express");

const router = express.Router();
const coaches = require("../controllers/coaches");

////取得教練列表
// router.get("/", async (req, res, next) => {
//   try {
//     const { per, page } = req.query;

//     // 檢查 per 和 page 是否為有效數字
//     if (isNotValidSting(per) || isNotValidSting(page)) {
//       logger.warn("欄位未填寫正確");
//       // return res.status(400).json({
//       //   status: "failed",
//       //   message: "欄位未填寫正確",
//       // });
//       next(appError(400, "欄位未填寫正確"));
//       return;
//     }

//     // 轉換 per & page
//     const limit = parseInt(per, 10);
//     const currentPage = parseInt(page, 10);
//     const offset = (currentPage - 1) * limit;

//     if (isNaN(limit) || isNaN(currentPage) || limit <= 0 || currentPage <= 0) {
//       logger.warn("每頁筆數 (per) 和 頁碼 (page) 必須是正整數");
//       // return res.status(400).json({
//       //   status: "failed",
//       //   message: "每頁筆數 (per) 和 頁碼 (page) 必須是正整數",
//       // });
//       next(appError(400, "每頁筆數 (per) 和 頁碼 (page) 必須是正整數"));
//       return;
//     }

//     // 取得教練列表
//     const coachRepository = dataSource.getRepository("Coach");
//     //findAndCount() 調用指定條件資料，並計算資料數
//     const [coaches, total] = await coachRepository.findAndCount({
//       select: {
//         id: true,
//       },
//       relations: ["User"],
//       take: limit,
//       skip: offset,
//     });

//     res.status(200).json({
//       status: "success",
//       data: coaches,
//       total,
//       page: currentPage,
//       per: limit,
//       totalPages: Math.ceil(total / limit),
//     });
//   } catch (error) {
//     logger.error(error);
//     next(error);
//   }
// });
router.get("/", coaches.getCoaches);

// 取得教練詳細資訊
// router.get("/:coachId", async (req, res, next) => {
//   try {
//     const { coachId } = req.params;
//     if (isUndefined(coachId) || isNotValidSting(coachId)) {
//       logger.warn("ID錯誤");
//       // res.status(400).json({
//       //   status: "failed",
//       //   message: "ID錯誤",
//       // });
//       next(appError(400, "ID錯誤"));
//       return;
//     }
//     const coachRepository = dataSource.getRepository("Coach");
//     const coach = await coachRepository.find({
//       select: [
//         "id",
//         "user_id",
//         "experience_years",
//         "description",
//         "profile_image_url",
//         "created_at",
//         "updated_at",
//       ],
//       where: { id: coachId },
//     });

//     if (!coach) {
//       // res.status(400).json({
//       //   status: "failed",
//       //   message: "找不到該教練",
//       // });
//       next(appError(400, "找不到該教練"));
//       return;
//     }

//     const userRepository = dataSource.getRepository("User");
//     const userInfo = await userRepository.findOne({
//       select: ["name", "role"],
//       where: { id: coach[0].user_id },
//     });
//     res.status(200).json({
//       status: "success",
//       data: {
//         user: userInfo,
//         coach: coach[0],
//       },
//     });
//   } catch (error) {
//     logger.error(error);
//     next(error);
//   }
// });
router.get("/:coachId", coaches.getCoachDetail);

router.get("/:coachId/courses", coaches.getCoachCourses);

module.exports = router;
