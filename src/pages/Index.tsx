import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useEffect, useState } from "react";

const MatrixRain = () => {
  const [drops, setDrops] = useState<number[]>([]);

  useEffect(() => {
    const canvas = document.getElementById('matrix-canvas') as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00ff41';
      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      id="matrix-canvas"
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ background: 'black' }}
    />
  );
};

const Index = () => {
  const technologies = [
    { name: "React", category: "Frontend", icon: "Code" },
    { name: "Vue.js", category: "Frontend", icon: "Layers" },
    { name: "Angular", category: "Frontend", icon: "Box" },
    { name: "Node.js", category: "Backend", icon: "Server" },
    { name: "Python", category: "Cyber Security", icon: "Terminal" },
    { name: "Kali Linux", category: "Pentesting", icon: "Shield" },
    { name: "Metasploit", category: "Exploitation", icon: "Zap" },
    { name: "Wireshark", category: "Network Analysis", icon: "Wifi" }
  ];

  const projects = [
    {
      title: "Network Penetration Tool",
      description: "Инструмент для пентестинга сетевой инфраструктуры с автоматизированным сканированием",
      tech: ["Python", "Nmap", "SQLMap"],
      link: "#",
      image: "/img/658e841b-d8b3-48bd-a728-a5a32bb15ab6.jpg"
    },
    {
      title: "OSINT Framework",
      description: "Фреймворк для сбора разведывательной информации из открытых источников",
      tech: ["React", "Python", "ElasticSearch"],
      link: "#",
      image: "/img/ceea3594-d2c3-469f-a57f-f94fd5fb7d3f.jpg"
    },
    {
      title: "Vulnerability Scanner",
      description: "Сканер уязвимостей веб-приложений с детальной отчетностью",
      tech: ["Node.js", "Burp Suite", "OWASP ZAP"],
      link: "#",
      image: "/img/e8e4ac97-7390-43c3-95b6-263945d08d3f.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-green-400 relative overflow-hidden">
      <MatrixRain />
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-green-500/30">
        <div className="max-w-6xl mx-auto px-6 py-4 relative z-10">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-green-400 font-mono">[HACKER_PORTFOLIO]</h1>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-green-300 hover:text-green-400 transition-colors font-mono hover:shadow-green-glow">/about</a>
              <a href="#tech" className="text-green-300 hover:text-green-400 transition-colors font-mono hover:shadow-green-glow">/skills</a>
              <a href="#projects" className="text-green-300 hover:text-green-400 transition-colors font-mono hover:shadow-green-glow">/exploits</a>
              <a href="#contact" className="text-green-300 hover:text-green-400 transition-colors font-mono hover:shadow-green-glow">/contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-green-400 mb-6 font-mono">
              CYBER
              <span className="text-green-300 animate-pulse"> SECURITY</span>
              <br />
              <span className="text-green-500 text-4xl md:text-5xl">[EXPERT]</span>
            </h1>
            <p className="text-xl md:text-2xl text-green-300 mb-8 max-w-3xl mx-auto font-mono">
              &gt; Пентестинг | Кибербезопасность | Этичный хакинг<br />
              &gt; Анализ уязвимостей | OSINT | Реверс-инжиниринг
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-black px-8 py-3 font-mono border border-green-400 shadow-green-glow">
                <Icon name="Download" className="mr-2" size={20} />
                [DOWNLOAD_CV]
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3 border-green-400 text-green-400 hover:bg-green-400 hover:text-black font-mono">
                <Icon name="Github" className="mr-2" size={20} />
                [GITHUB_REPO]
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-scale-in">
              <h2 className="text-4xl font-bold text-green-400 mb-6 font-mono">[ABOUT_ME]</h2>
              <p className="text-lg text-green-300 mb-6 font-mono">
                &gt; Эксперт по кибербезопасности с 7+ годами опыта в пентестинге...<br />
                &gt; Специализируюсь на поиске уязвимостей и разработке систем защиты...<br />
                &gt; Этичный хакер, сертифицированный пентестер...
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Icon name="CheckCircle" className="text-green-400 mr-3" size={20} />
                  <span className="text-green-300 font-mono">[✓] Penetration Testing & Vulnerability Assessment</span>
                </div>
                <div className="flex items-center">
                  <Icon name="CheckCircle" className="text-green-400 mr-3" size={20} />
                  <span className="text-green-300 font-mono">[✓] Network Security & Forensics</span>
                </div>
                <div className="flex items-center">
                  <Icon name="CheckCircle" className="text-green-400 mr-3" size={20} />
                  <span className="text-green-300 font-mono">[✓] OSINT & Social Engineering</span>
                </div>
              </div>
            </div>
            <div className="animate-fade-in">
              <Card className="bg-black border border-green-500 shadow-green-glow">
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-green-300 rounded-full mx-auto mb-4 flex items-center justify-center animate-pulse">
                      <Icon name="Shield" size={40} className="text-black" />
                    </div>
                    <h3 className="text-2xl font-bold text-green-400 mb-2 font-mono">Neo_Hacker</h3>
                    <p className="text-green-300 font-mono">Certified Ethical Hacker (CEH)</p>
                    <p className="text-green-500 text-sm font-mono mt-2">[STATUS: ONLINE]</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="tech" className="py-20 px-6 bg-black/50 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-400 mb-4 font-mono">[HACKING_ARSENAL]</h2>
            <p className="text-xl text-green-300 font-mono">&gt; Инструменты для пентестинга и кибербезопасности</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <Card key={tech.name} className="hover:scale-105 transition-all duration-300 hover:shadow-green-glow cursor-pointer group bg-black border border-green-500/30">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-green-900/50 rounded-lg mx-auto mb-4 flex items-center justify-center group-hover:bg-green-600 transition-colors">
                    <Icon name={tech.icon} size={24} className="text-green-400 group-hover:text-black" />
                  </div>
                  <h3 className="font-semibold text-green-400 mb-2 font-mono">{tech.name}</h3>
                  <Badge variant="outline" className="text-xs border-green-500 text-green-300">{tech.category}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-400 mb-4 font-mono">[EXPLOITS_&_TOOLS]</h2>
            <p className="text-xl text-green-300 font-mono">&gt; Последние разработки и успешные пентесты</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={project.title} className="hover:shadow-green-glow transition-all duration-300 hover:-translate-y-2 group bg-black border border-green-500/30">
                <CardHeader>
                  <div className="w-full h-48 rounded-lg mb-4 overflow-hidden border border-green-500/30">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 filter hue-rotate-90"
                    />
                  </div>
                  <CardTitle className="text-xl text-green-400 font-mono">{project.title}</CardTitle>
                  <CardDescription className="text-green-300 font-mono">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs border-green-500 text-green-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-500 text-black font-mono group-hover:shadow-green-glow transition-all">
                    <Icon name="ExternalLink" className="mr-2" size={16} />
                    [EXECUTE_EXPLOIT]
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-black/50 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-green-400 mb-4 font-mono">[ESTABLISH_CONNECTION]</h2>
          <p className="text-xl text-green-300 mb-12 font-mono">&gt; Готов обсудить пентестинг и кибербезопасность...</p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="hover:shadow-green-glow transition-shadow bg-black border border-green-500/30">
              <CardContent className="p-6">
                <Icon name="Mail" size={32} className="text-green-400 mx-auto mb-4" />
                <h3 className="font-semibold text-green-400 mb-2 font-mono">[EMAIL_ADDR]</h3>
                <p className="text-green-300 font-mono">neo.hacker@encrypted.com</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-green-glow transition-shadow bg-black border border-green-500/30">
              <CardContent className="p-6">
                <Icon name="Phone" size={32} className="text-green-400 mx-auto mb-4" />
                <h3 className="font-semibold text-green-400 mb-2 font-mono">[SECURE_LINE]</h3>
                <p className="text-green-300 font-mono">+7 (***) ***-**-**</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-green-glow transition-shadow bg-black border border-green-500/30">
              <CardContent className="p-6">
                <Icon name="MapPin" size={32} className="text-green-400 mx-auto mb-4" />
                <h3 className="font-semibold text-green-400 mb-2 font-mono">[LOCATION]</h3>
                <p className="text-green-300 font-mono">Matrix, Cyberspace</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center space-x-6">
            <Button size="lg" className="bg-green-600 hover:bg-green-500 text-black font-mono shadow-green-glow">
              <Icon name="Send" className="mr-2" size={20} />
              [SEND_MESSAGE]
            </Button>
            <Button variant="outline" size="lg" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black font-mono">
              <Icon name="Linkedin" className="mr-2" size={20} />
              [LINKEDIN]
            </Button>
            <Button variant="outline" size="lg" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black font-mono">
              <Icon name="Github" className="mr-2" size={20} />
              [GITHUB]
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-black border-t border-green-500/30 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-green-400 font-mono">&gt; © 2024 Neo_Hacker | [SYSTEM_SECURED] | All exploits documented &lt;</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;