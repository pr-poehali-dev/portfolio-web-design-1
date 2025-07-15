import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const technologies = [
    { name: "React", category: "Frontend", icon: "Code" },
    { name: "Vue.js", category: "Frontend", icon: "Layers" },
    { name: "Angular", category: "Frontend", icon: "Box" },
    { name: "Node.js", category: "Backend", icon: "Server" },
    { name: "Python", category: "Backend", icon: "Terminal" },
    { name: "Java", category: "Backend", icon: "Coffee" },
    { name: "TypeScript", category: "Language", icon: "FileCode" },
    { name: "MongoDB", category: "Database", icon: "Database" }
  ];

  const projects = [
    {
      title: "E-commerce Platform",
      description: "Полнофункциональная платформа электронной коммерции с React и Node.js",
      tech: ["React", "Node.js", "MongoDB"],
      link: "#",
      image: "/img/658e841b-d8b3-48bd-a728-a5a32bb15ab6.jpg"
    },
    {
      title: "Task Management App",
      description: "Приложение для управления задачами с real-time обновлениями",
      tech: ["Vue.js", "Python", "PostgreSQL"],
      link: "#",
      image: "/img/ceea3594-d2c3-469f-a57f-f94fd5fb7d3f.jpg"
    },
    {
      title: "Analytics Dashboard",
      description: "Дашборд для аналитики с интерактивными графиками",
      tech: ["Angular", "Java", "MySQL"],
      link: "#",
      image: "/img/e8e4ac97-7390-43c3-95b6-263945d08d3f.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-slate-800">Portfolio</h1>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-slate-600 hover:text-blue-600 transition-colors">О себе</a>
              <a href="#tech" className="text-slate-600 hover:text-blue-600 transition-colors">Технологии</a>
              <a href="#projects" className="text-slate-600 hover:text-blue-600 transition-colors">Проекты</a>
              <a href="#contact" className="text-slate-600 hover:text-blue-600 transition-colors">Контакты</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6">
              Fullstack
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Developer</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Создаю современные веб-приложения с использованием React, Vue, Angular на фронтенде и Node.js, Python, Java на бэкенде
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                <Icon name="Download" className="mr-2" size={20} />
                Скачать CV
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3">
                <Icon name="Github" className="mr-2" size={20} />
                GitHub
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-scale-in">
              <h2 className="text-4xl font-bold text-slate-800 mb-6">О себе</h2>
              <p className="text-lg text-slate-600 mb-6">
                Fullstack разработчик с 5+ годами опыта создания высокопроизводительных веб-приложений. 
                Специализируюсь на современных фронтенд технологиях и масштабируемых бэкенд решениях.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Icon name="CheckCircle" className="text-green-500 mr-3" size={20} />
                  <span className="text-slate-700">Frontend: React, Vue.js, Angular</span>
                </div>
                <div className="flex items-center">
                  <Icon name="CheckCircle" className="text-green-500 mr-3" size={20} />
                  <span className="text-slate-700">Backend: Node.js, Python, Java</span>
                </div>
                <div className="flex items-center">
                  <Icon name="CheckCircle" className="text-green-500 mr-3" size={20} />
                  <span className="text-slate-700">Базы данных: MongoDB, PostgreSQL, MySQL</span>
                </div>
              </div>
            </div>
            <div className="animate-fade-in">
              <Card className="bg-white shadow-xl">
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Icon name="User" size={40} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">Александр Петров</h3>
                    <p className="text-slate-600">Senior Fullstack Developer</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="tech" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Технологии</h2>
            <p className="text-xl text-slate-600">Инструменты и фреймворки, с которыми я работаю</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <Card key={tech.name} className="hover:scale-105 transition-all duration-300 hover:shadow-lg cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-4 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <Icon name={tech.icon} size={24} className="text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-2">{tech.name}</h3>
                  <Badge variant="secondary" className="text-xs">{tech.category}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Проекты</h2>
            <p className="text-xl text-slate-600">Последние работы и достижения</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={project.title} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <CardHeader>
                  <div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-full group-hover:bg-blue-600 transition-colors">
                    <Icon name="ExternalLink" className="mr-2" size={16} />
                    Посмотреть проект
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Связаться со мной</h2>
          <p className="text-xl text-slate-600 mb-12">Готов обсудить ваш проект или возможности сотрудничества</p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Icon name="Mail" size={32} className="text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-slate-800 mb-2">Email</h3>
                <p className="text-slate-600">alex.petrov@email.com</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Icon name="Phone" size={32} className="text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-slate-800 mb-2">Телефон</h3>
                <p className="text-slate-600">+7 (999) 123-45-67</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Icon name="MapPin" size={32} className="text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-slate-800 mb-2">Локация</h3>
                <p className="text-slate-600">Москва, Россия</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center space-x-6">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Icon name="Send" className="mr-2" size={20} />
              Написать письмо
            </Button>
            <Button variant="outline" size="lg">
              <Icon name="Linkedin" className="mr-2" size={20} />
              LinkedIn
            </Button>
            <Button variant="outline" size="lg">
              <Icon name="Github" className="mr-2" size={20} />
              GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-slate-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400">© 2024 Александр Петров. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;