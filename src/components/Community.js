import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaUserPlus, FaComment, FaThumbsUp } from 'react-icons/fa';

const Community = () => {
  const [discussions, setDiscussions] = useState([
    {
      id: 1,
      title: "Best Fantasy Books of 2023",
      author: "Alice",
      comments: 5,
      likes: 10,
      content: "What are your favorite fantasy books released this year?",
      commentsList: []
    },
    {
      id: 2,
      title: "Book Club Recommendations",
      author: "Bob",
      comments: 3,
      likes: 5,
      content: "Looking for suggestions for our next book club read!",
      commentsList: []
    },
    {
      id: 3,
      title: "Reading Challenges",
      author: "Charlie",
      comments: 8,
      likes: 15,
      content: "Who is participating in reading challenges this year?",
      commentsList: []
    }
  ]);

  const [newDiscussion, setNewDiscussion] = useState("");
  const [newComment, setNewComment] = useState("");

  const handleAddDiscussion = () => {
    if (newDiscussion.trim()) {
      const newDiscussionObj = {
        id: discussions.length + 1,
        title: newDiscussion,
        author: "You", // Replace with actual user name
        comments: 0,
        likes: 0,
        content: "This is a new discussion topic.",
        commentsList: []
      };
      setDiscussions([...discussions, newDiscussionObj]);
      setNewDiscussion("");
    }
  };

  const handleAddComment = (discussionId) => {
    if (newComment.trim()) {
      const updatedDiscussions = discussions.map(discussion => {
        if (discussion.id === discussionId) {
          return {
            ...discussion,
            comments: discussion.comments + 1,
            commentsList: [...discussion.commentsList, { author: "You", content: newComment }]
          };
        }
        return discussion;
      });
      setDiscussions(updatedDiscussions);
      setNewComment("");
    }
  };

  const handleLikeDiscussion = (discussionId) => {
    const updatedDiscussions = discussions.map(discussion => {
      if (discussion.id === discussionId) {
        return {
          ...discussion,
          likes: discussion.likes + 1
        };
      }
      return discussion;
    });
    setDiscussions(updatedDiscussions);
  };

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-[#0A0A0F] to-[#1A1A1F] overflow-hidden font-['Inter']">
      {/* Background gradient overlay */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-[#8B3DFF]/10 rounded-[600px] filter blur-[120px] transform -translate-y-1/4"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0F]/90 to-[#0A0A0F]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,61,255,0.08),transparent_70%)]"></div>
      </div>

      {/* Back Button */}
      <button 
        onClick={() => window.history.back()}
        className="fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 bg-purple-500/10 text-purple-400 rounded-lg hover:bg-purple-500/20 transition-all duration-300"
      >
        <FaArrowLeft /> Back
      </button>

      {/* Content container */}
      <div className="relative z-10 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-['General_Sans'] font-medium tracking-[-0.03em] text-white mb-4">
              Community
            </h1>
            <p className="text-gray-400 text-lg font-light max-w-2xl mx-auto">
              Join the conversation and connect with fellow readers!
            </p>
          </motion.div>

          {/* New Discussion Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-white mb-4">Start a New Discussion</h2>
            <div className="flex gap-4">
              <input 
                type="text" 
                value={newDiscussion} 
                onChange={(e) => setNewDiscussion(e.target.value)} 
                placeholder="Enter discussion title..." 
                className="flex-1 p-2 rounded border border-gray-300"
              />
              <button 
                onClick={handleAddDiscussion} 
                className="flex items-center px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition duration-300"
              >
                <FaUserPlus className="mr-2" /> Add Discussion
              </button>
            </div>
          </div>

          {/* Discussion Threads */}
          <div className="space-y-6">
            {discussions.map((discussion) => (
              <motion.div
                key={discussion.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white/[0.02] backdrop-blur-2xl rounded-2xl p-4 border border-white/5 shadow-lg"
              >
                <h3 className="text-xl font-medium text-white mb-1">
                  {discussion.title}
                </h3>
                <p className="text-gray-400 mb-1">
                  Posted by {discussion.author}
                </p>
                <p className="text-gray-500 mb-2">
                  {discussion.content}
                </p>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-400">{discussion.comments} Comments</span>
                  <button 
                    onClick={() => handleLikeDiscussion(discussion.id)} 
                    className="text-purple-500 hover:text-purple-700 transition duration-300"
                  >
                    <FaThumbsUp /> {discussion.likes}
                  </button>
                </div>
                <div className="mb-4">
                  <input 
                    type="text" 
                    value={newComment} 
                    onChange={(e) => setNewComment(e.target.value)} 
                    placeholder="Add a comment..." 
                    className="p-2 rounded border border-gray-300"
                  />
                  <button 
                    onClick={() => handleAddComment(discussion.id)} 
                    className="ml-2 px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition duration-300"
                  >
                    <FaComment /> Comment
                  </button>
                </div>
                <div className="mt-2">
                  {discussion.commentsList.map((comment, index) => (
                    <div key={index} className="text-gray-400 text-sm mb-1 pl-4 border-l-2 border-gray-600">
                      <strong>{comment.author}:</strong> {comment.content}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community; 