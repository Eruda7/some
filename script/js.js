// header
const header = document.createElement('header')
const logo = document.createElement('div')
logo.classList.add('logo')
const logo_img = document.createElement('img')
logo_img.src = 'images/logo.jpeg'
const h1 = document.createElement('h1')
h1.textContent = 'SLOGAN SLOGAN SLOGAN'

const header_menu = document.createElement('nav')
const ul_list = document.createElement('ul')
ul_list.className = 'menu'
const nav_words = ['Home']

// three_block
let three_block = document.createElement('div')
three_block.classList.add('three_block')
three_block.innerHTML = `
        <div class="block">
					<div class="black_bg">
						<p>
							Часто ли Вы опаздываете на <br />
							работу (учёбу)?
						</p>
					</div>
				</div>
				<div class="block">
					<div class="black_bg">
						<p>
							Часто ли Вы опаздываете на <br />
							работу (учёбу)?
						</p>
					</div>
				</div>
				<div class="block">
					<div class="black_bg">
						<p>
							Часто ли Вы опаздываете на <br />
							работу (учёбу)?
						</p>
					</div>
				</div>
`
// about_app
let about_app = document.createElement('div')
about_app.classList.add('about_app')
about_app.innerHTML = `
<h2>О приложении</h2>
				<div class="video">
					<button>
						<img
							src="../images/play-btn.png"
						/>
					</button>
				</div>
				<div class="images_app">
					<img src="images/question.png" alt="" />
					<img src="images/question.png" alt="" />
					<img src="images/question.png" alt="" />
					<img src="images/question.png" alt="" />
					<img src="images/question.png" alt="" />
				</div>
`

// about_project
let about_project = document.createElement('div')
about_project.classList.add('about_project')
about_project.innerHTML = `
<h2>О проекте</h2>
				<p>
					Курс для начинающих предпринимателей, направленный на качественный
					результат за 6 недель. Опытные бизнесмены, инвесторы и профессионалы в
					своем деле помогают участникам на всех этапах развития их бизнеса: от
					разработки идеи до ее реализации.
				</p>
			</section>
			<section class="download">
				<h2>Скачать</h2>
				<div class="images">
					<img
						src="../images/android.png"
						alt=""
					/>
					<img
						src="../images/qr.png"
						alt=""
					/>
				</div>
				<p>
					Курс для начинающих предпринимателей, направленный на качественный
					результат за 6 недель. Опытные бизнесмены, инвесторы и профессионалы в
					своем деле помогают участникам на всех этапах развития их бизнеса: от
					разработки идеи до ее реализации.
				</p>
`

//footer
const footer = document.createElement('footer')
footer.innerHTML = `
<h2 class="logo_text">SOME</h2>
			<div class="social_medias">
				<img
					src="../images/wk.png"
					alt=""
				/>
				<img
					src="../images/facebook.png"
					alt=""
				/>
				<img
					src="../images/instagram.png"
					alt=""
				/>
			</div>
			<div class="footer_nav">
				<div class="block_1">
					<h4>Контакты</h4>
					<p>Tel.: +996 (312) 915000 + Еxt.</p>
					<p>Fax: +996 (312) 915 028</p>
				</div>
				<div class="block_1">
					<h4>Адреса</h4>
					<p>American University of Central Asia</p>
					<p>7/6 Aaly Tokombaev Street</p>
					<p>Bishkek, Kyrgyz Republic 720060</p>
				</div>
				<div class="block_1">
					<h4>Помощь</h4>
					<a href="">Помощь</a>
					<a href="">Помощь</a>
					<a href="">Помощь</a>
				</div>
			</div>
`

header.prepend(logo)
logo.append(logo_img, h1)
// body append
const body = document.body
body.append(header, three_block, about_app, about_project, footer)
