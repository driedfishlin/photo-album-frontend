// >> 個人簡介元件

import * as React from 'react';
import personalPhoto from '../../../public/image/profile_pic_sm.jpg';
import GithubLogo from '../../../public/image/logo/github_logo_text.svg';
import InstagramLogo from '../../../public/image/logo/instagram_logo_text.svg';
import MediumLogo from '../../../public/image/logo/medium_logo_text.svg';

class Profile extends React.Component<{}> {
	render(): React.Node {
		return (
			<main className={`profile_container`}>
				<div className={`profile_img_container`}>
					<img src={personalPhoto} />
				</div>
				<div className={`profile_page_name`}>
					<h6>GANG - LIN&nbsp;&nbsp;FAN</h6>
					<p>Taitung, Taiwan</p>
				</div>
				<div className={`profile_text_container`}>
					<p>
						在台東鄉野中長大，在大學時迷上了健行，從而開始接觸攝影。懷著想紀錄美好風景與事物的想法，提著相機、騎著機車在南臺灣趴趴走，並開始想體驗各種不同的人生風景。藉著服役的機會，2019年自願前往馬祖體驗了一年的海島生活。隨著年紀增長，認識到人生在不同階段都會面對不同的挑戰，目前雖然暫時沒有從事攝影活動，但正因為用影像記錄了成長的經歷，才能深刻記得自己的夢想，能夠更了解自己，然後努力成就更好的自己。
					</p>
					<div className={`profile_external_link_container`}>
						<a
							href="https://github.com/driedfishlin"
							target="_blank"
							rel="noreferrer noopener">
							<GithubLogo />
						</a>
						<a
							href="https://www.instagram.com/obwithoboe/"
							target="_blank"
							rel="noreferrer noopener">
							<InstagramLogo />
						</a>
						<a
							href="https://driedfishlin.medium.com/"
							target="_blank"
							rel="noreferrer noopener">
							<MediumLogo />
						</a>
					</div>
				</div>
			</main>
		);
	}
}

export default Profile;
