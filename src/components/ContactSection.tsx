import { useState } from "react";
import { Send, Linkedin, Github, Mail, Instagram, Calendar, Clock } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [showSchedule, setShowSchedule] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [meetingData, setMeetingData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    topic: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '668d8b9b-e057-4764-9004-9941855be2a1',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          subject: 'message from portfolio',
        }),
      });

      const data = await response.json();
      
      if (data.success) {
        toast.success("Message sent successfully! I'll get back to you soon.");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Add this handler before the return statement
  const handleMeetingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '668d8b9b-e057-4764-9004-9941855be2a1',
          name: meetingData.name,
          email: meetingData.email,
          date: meetingData.date,
          time: meetingData.time,
          topic: meetingData.topic,
          subject: 'meeting request from portfolio',
        }),
      });

      const data = await response.json();
      
      if (data.success) {
        toast.success("Meeting scheduled successfully! I'll get back to you soon.");
        setMeetingData({ name: "", email: "", date: "", time: "", topic: "" });
      } else {
        toast.error("Failed to schedule meeting. Please try again.");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-2 text-foreground">Get In Touch</h2>
        <p className="text-foreground mb-8">
          Have a project in mind or want to collaborate? Feel free to reach out to me using the contact form or through social media.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-card rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-6 text-foreground">
              {showSchedule ? "Schedule a Meeting" : "Send me a message"}
            </h3>
            {!showSchedule ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm text-foreground mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-background border border-border rounded-lg p-3 text-foreground"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-foreground mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-background border border-border rounded-lg p-3 text-foreground"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-foreground mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-background border border-border rounded-lg p-3 text-foreground"
                    placeholder="+91 1234567890"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-foreground mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-background border border-border rounded-lg p-3 text-foreground"
                    placeholder="How can I help you?"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground rounded-lg p-3 flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
                >
                  {isSubmitting ? "Sending..." : "Send Message"} <Send size={16} />
                </button>
              </form>
            ) : (
              <form onSubmit={handleMeetingSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm text-foreground mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={meetingData.name}
                    onChange={(e) => setMeetingData(prev => ({ ...prev, [e.target.name]: e.target.value }))}
                    className="w-full bg-background border border-border rounded-lg p-3 text-foreground"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-foreground mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={meetingData.email}
                    onChange={(e) => setMeetingData(prev => ({ ...prev, [e.target.name]: e.target.value }))}
                    className="w-full bg-background border border-border rounded-lg p-3 text-foreground"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-foreground mb-2">Date</label>
                    <input
                      type="date"
                      name="date"
                      value={meetingData.date}
                      onChange={(e) => setMeetingData(prev => ({ ...prev, [e.target.name]: e.target.value }))}
                      className="w-full bg-background border border-border rounded-lg p-3 text-foreground"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-foreground mb-2">Time</label>
                    <input
                      type="time"
                      name="time"
                      value={meetingData.time}
                      onChange={(e) => setMeetingData(prev => ({ ...prev, [e.target.name]: e.target.value }))}
                      className="w-full bg-background border border-border rounded-lg p-3 text-foreground"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-foreground mb-2">Topic</label>
                  <textarea
                    name="topic"
                    value={meetingData.topic}
                    onChange={(e) => setMeetingData(prev => ({ ...prev, [e.target.name]: e.target.value }))}
                    rows={3}
                    className="w-full bg-background border border-border rounded-lg p-3 text-foreground"
                    placeholder="What would you like to discuss?"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground rounded-lg p-3 flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
                >
                  {isSubmitting ? "Scheduling..." : "Schedule Meeting"} <Calendar size={16} />
                </button>
              </form>
            )}
            
            <div className="mt-6 pt-6 border-t border-border">
              <button
                onClick={() => setShowSchedule(!showSchedule)}
                className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2"
              >
                {showSchedule ? "Send a message instead" : "Schedule a meeting instead"}
                <Clock size={16} />
              </button>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-card rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-6 text-foreground">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="text-primary" size={20} />
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a href="mailto:contact@sagarkarmakar.dev" className="text-primary hover:text-primary/80 transition-colors">
                      contact@sagarkarmakar.dev
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="text-primary" size={20} />
                  <div>
                    <p className="font-medium text-foreground">LinkedIn</p>
                    <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
                      linkedin.com/in/sagarkarmakar
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="text-primary" size={20} />
                  <div>
                    <p className="font-medium text-foreground">GitHub</p>
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
                      github.com/sagarkarmakar
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Instagram className="text-primary" size={20} />
                  <div>
                    <p className="font-medium text-foreground">Instagram</p>
                    <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
                      @sagarkarmakar
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-6 text-foreground">Let's Work Together</h3>
              <p className="text-foreground mb-4">
                I'm always open to discussing new opportunities, interesting projects, creative ideas, or just to say hello!
              </p>
              <div className="space-y-2 text-foreground">
                <p>• Web Development</p>
                <p>• Mobile App Development</p>
                <p>• UI/UX Design</p>
                <p>• Technical Consulting</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
