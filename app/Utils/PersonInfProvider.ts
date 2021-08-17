import * as converter from 'number-to-words';

export default class PersonInfProvider {
  private providePersonInf() {
    var temp_year = converter.toWords(((new Date().getFullYear()) - 2017))
    var years_experience = temp_year.charAt(0).toUpperCase() + temp_year.slice(1)
    var personData = {
      firstname: "Dio",
      lastname: "Affriza",
      slug: "Software Engineer",
      img_uri: "svg/stamp.svg",
      github_link: "https://github.com/afuriza",
      twitter_link: "https://twitter.com/dio_affriza",
      motto: `${years_experience} years understanding the development of Windows Desktop Application, Frontend Web, 
        Backend Web, Server-side Application both CGI and Embedded Server, Android Development and Embedded Devices 
        such as ARM Dev Board (e.g Raspberry Pi) and Microcontrollers`
    }

    return personData
  }

  private provideProjects() {
    var projects = [
      {
        name: "Kyoukai Framework",
        slug: "Simple Framework for Object Pascal Web Application",
        img: "img/portfolio/kyokai.png"
      }
    ]

    return projects
  }

  private provideExperience(){
    var experience = {
      job: [
        {
          name: "Estoh.id",
          jobstack: "Fullstack Object Pascal Developer",
          year: "9999 - 9999",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!"
        }
      ],
      education: [
        {
          name: "SMK Unggulan NU",
          type: "Vocational Highschool",
          slug: "Computer and Network Engineering",
          year_of_study: "2011 - 2014"
        }
      ],
      awards: [
        {
          name: "UPT-PPPK Jawa Timur",
          topic: "Informatics Engineering Contest for Vocational Highschool",
          year: "2013"
        }
      ]
    }

    return experience
  }

  public get() {
    var person = {
      person_data: this.providePersonInf(),
      projects: this.provideProjects(),
      experience: this.provideExperience()
    }

    return person
  }
}