
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
    <section id="contact" className="py-20 bg-[#111827]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>
        <p className="text-gray-400 mb-8">
          Have a project in mind or want to collaborate? Feel free to reach out to me using the contact form or through social media.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-[#1C1F26] rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-6">
              {showSchedule ? "Schedule a Meeting" : "Send me a message"}
            </h3>
            {!showSchedule ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-[#111827] border border-gray-700 rounded-lg p-3 text-white"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#111827] border border-gray-700 rounded-lg p-3 text-white"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-[#111827] border border-gray-700 rounded-lg p-3 text-white"
                    placeholder="+91 1234567890"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-[#111827] border border-gray-700 rounded-lg p-3 text-white"
                    placeholder="How can I help you?"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white rounded-lg p-3 flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
                >
                  {isSubmitting ? "Sending..." : "Send Message"} <Send size={16} />
                </button>
              </form>
            ) : (
              <form onSubmit={handleMeetingSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={meetingData.name}
                    onChange={(e) => setMeetingData(prev => ({ ...prev, [e.target.name]: e.target.value }))}
                    className="w-full bg-[#111827] border border-gray-700 rounded-lg p-3 text-white"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={meetingData.email}
                    onChange={(e) => setMeetingData(prev => ({ ...prev, [e.target.name]: e.target.value }))}
                    className="w-full bg-[#111827] border border-gray-700 rounded-lg p-3 text-white"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Preferred Date</label>
                    <input
                      type="date"
                      name="date"
                      value={meetingData.date}
                      onChange={(e) => setMeetingData(prev => ({ ...prev, [e.target.name]: e.target.value }))}
                      className="w-full bg-[#111827] border border-gray-700 rounded-lg p-3 text-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Preferred Time</label>
                    <select
                      name="time"
                      value={meetingData.time}
                      onChange={(e) => setMeetingData(prev => ({ ...prev, [e.target.name]: e.target.value }))}
                      className="w-full bg-[#111827] border border-gray-700 rounded-lg p-3 text-white"
                      required
                    >
                      <option value="">Select Time</option>
                      <option value="12:00 AM">12:00 AM</option>
                      <option value="12:30 AM">12:30 AM</option>
                      <option value="1:00 AM">1:00 AM</option>
                      <option value="1:30 AM">1:30 AM</option>
                      <option value="2:00 AM">2:00 AM</option>
                      <option value="2:30 AM">2:30 AM</option>
                      <option value="3:00 AM">3:00 AM</option>
                      <option value="3:30 AM">3:30 AM</option>
                      <option value="4:00 AM">4:00 AM</option>
                      <option value="4:30 AM">4:30 AM</option>
                      <option value="5:00 AM">5:00 AM</option>
                      <option value="5:30 AM">5:30 AM</option>
                      <option value="6:00 AM">6:00 AM</option>
                      <option value="6:30 AM">6:30 AM</option>
                      <option value="7:00 AM">7:00 AM</option>
                      <option value="7:30 AM">7:30 AM</option>
                      <option value="8:00 AM">8:00 AM</option>
                      <option value="8:30 AM">8:30 AM</option>
                      <option value="9:00 AM">9:00 AM</option>
                      <option value="9:30 AM">9:30 AM</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="10:30 AM">10:30 AM</option>
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="11:30 AM">11:30 AM</option>
                      <option value="12:00 PM">12:00 PM</option>
                      <option value="12:30 PM">12:30 PM</option>
                      <option value="1:00 PM">1:00 PM</option>
                      <option value="1:30 PM">1:30 PM</option>
                      <option value="2:00 PM">2:00 PM</option>
                      <option value="2:30 PM">2:30 PM</option>
                      <option value="3:00 PM">3:00 PM</option>
                      <option value="3:30 PM">3:30 PM</option>
                      <option value="4:00 PM">4:00 PM</option>
                      <option value="4:30 PM">4:30 PM</option>
                      <option value="5:00 PM">5:00 PM</option>
                      <option value="5:30 PM">5:30 PM</option>
                      <option value="6:00 PM">6:00 PM</option>
                      <option value="6:30 PM">6:30 PM</option>
                      <option value="7:00 PM">7:00 PM</option>
                      <option value="7:30 PM">7:30 PM</option>
                      <option value="8:00 PM">8:00 PM</option>
                      <option value="8:30 PM">8:30 PM</option>
                      <option value="9:00 PM">9:00 PM</option>
                      <option value="9:30 PM">9:30 PM</option>
                      <option value="10:00 PM">10:00 PM</option>
                      <option value="10:30 PM">10:30 PM</option>
                      <option value="11:00 PM">11:00 PM</option>
                      <option value="11:30 PM">11:30 PM</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Meeting Topic</label>
                  <textarea
                    name="topic"
                    value={meetingData.topic}
                    onChange={(e) => setMeetingData(prev => ({ ...prev, [e.target.name]: e.target.value }))}
                    rows={4}
                    className="w-full bg-[#111827] border border-gray-700 rounded-lg p-3 text-white"
                    placeholder="What would you like to discuss?"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white rounded-lg p-3 flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
                >
                  {isSubmitting ? "Scheduling..." : "Schedule Meeting"} <Calendar size={16} />
                </button>
              </form>
            )}
          </div>

          <div>
            <div className="bg-[#1C1F26] rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="text-primary" size={20} />
                  <div>
                    <span className="text-sm text-gray-400">Email</span>
                    <a href="mailto:sagarkarmakar10.2004@gmail.com" className="block hover:text-primary transition-colors">
                      sagarkarmakar10.2004@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="text-primary" size={20} />
                  <div>
                    <span className="text-sm text-gray-400">LinkedIn</span>
                    <a href="#" className="block hover:text-primary transition-colors">
                      linkedin.com/in/sagarkarmakar
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="text-primary" size={20} />
                  <div>
                    <span className="text-sm text-gray-400">GitHub</span>
                    <a href="#" className="block hover:text-primary transition-colors">
                      github.com/sagarkarmakar
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#1C1F26] rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Let's Work Together</h3>
              <p className="text-gray-400 mb-4">
                I'm currently available for freelance work and full-time positions. If you have a project that needs my expertise, I'd love to hear from you.
              </p>
              <button
                onClick={() => setShowSchedule(!showSchedule)}
                className="text-primary hover:underline flex items-center gap-2"
              >
                {showSchedule ? "Send a message" : "Schedule a meeting"} <Calendar size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
