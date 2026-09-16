/* ==========================================================
   蔡耀勋 · 个人简历  script.js
   外链式引入：在 </body> 前用 <script src="./script.js"></script>
   ========================================================== */

/* -------- 1. 页脚年份自动更新 -------- */
var yearEl = document.getElementById("year");
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

/* -------- 2. 导航高亮 --------
   滚动到哪个区块，就把对应的导航项点亮。 */
var sections = document.querySelectorAll("main section");
var navLinks = document.querySelectorAll(".nav a");

var sectionObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;

        var id = entry.target.getAttribute("id");
        navLinks.forEach(function (link) {
            var isCurrent = link.getAttribute("href") === "#" + id;
            link.classList.toggle("active", isCurrent);
        });
    });
}, { rootMargin: "-45% 0px -50% 0px" });   // 区块位于屏幕中部时才算「当前」

sections.forEach(function (section) {
    sectionObserver.observe(section);
});

/* -------- 3. 回到顶部按钮 --------
   滚动超过 300px 才显示按钮，点击后平滑滚回顶部。 */
var toTopBtn = document.getElementById("toTop");

window.addEventListener("scroll", function () {
    toTopBtn.classList.toggle("show", window.scrollY > 300);
});

toTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
