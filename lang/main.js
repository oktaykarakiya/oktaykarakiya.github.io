document.getElementById("langButtons").addEventListener("click" , (e) => {
    let lang = e.target.innerText
    if(lang == "EN" || lang == "DE" || lang == "IT" || lang == "TR"){
        updateLanguage(lang)
    }
}) 


let idList = ['about', 'skills', 'experiences', 'my_documents', 'greeting', 'position', 'location', 'abut_me_title', 'about_me_text', 'what_i_do', 'frontend', 'backend', 'servers', 'frontend_text', 'backend_text', 'servers_text', 'spoken_languages', 'english', 'german', 'italian', 'turkish', 'russian', 'spanish', 'professional_skills', 'communication', 'teamwork', 'project_management', 'creativity', 'education', 'highschool_graduation_title', 'highschool_graduation_text', 'universiti_department', 'uni_time', 'university_text', 'certificates_link', 'always_up_to_date', 'always_up_to_date_things', 'work_experience', 'My_resp_coach_and_assistant', 'responsibility', 'responsibility_one', 'responsibility_two', 'company_and_role', 'responsibility_bis', 'responsibility_karisma_one', 'responsibility_karisma_two', 'responsibility_karisma_three', 'responsibility_karisma_four', 'download', 'd_cv', 'd_ML', 'd_certificates']


async function updateLanguage(lang) {
    const response = await fetch(`lang/${lang}.json`);
    const json = await response.json();
    console.log(json[idList[0]]);
    for(let i = 0; i < idList.length; i++){
        document.getElementById(idList[i]).innerHTML = json[idList[i]]
    }
}

updateLanguage("EN")
