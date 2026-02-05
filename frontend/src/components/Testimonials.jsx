import React, { useState } from 'react';
import { Star, Send } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner';
import { testimonials } from '../data/mock';

const Testimonials = () => {
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [reviewData, setReviewData] = useState({
    name: '',
    rating: 5,
    text: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const renderStars = (rating) => {
    return Array.from({ length: rating }).map((_, index) => (
      <Star key={index} className="w-5 h-5 fill-amber-400 text-amber-400" />
    ));
  };

  const handleRatingClick = (rating) => {
    setReviewData((prev) => ({ ...prev, rating }));
  };

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    
    if (!reviewData.name.trim() || !reviewData.text.trim()) {
      toast.error('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission (will be replaced with API call later)
    setTimeout(() => {
      console.log('Review submitted:', reviewData);
      toast.success('Thank you for your review! It will be published after verification.');
      
      // Reset form
      setReviewData({
        name: '',
        rating: 5,
        text: ''
      });
      setShowReviewForm(false);
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-stone-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
            Client Reviews
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients about
            their experiences
          </p>
          <div className="w-24 h-1 bg-amber-600 mx-auto mt-6"></div>
        </div>

        {/* Write Review Button */}
        {!showReviewForm && (
          <div className="text-center mb-12">
            <Button
              onClick={() => setShowReviewForm(true)}
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg"
              size="lg"
            >
              Write a Review
            </Button>
          </div>
        )}

        {/* Review Form */}
        {showReviewForm && (
          <div className="max-w-3xl mx-auto mb-12">
            <Card className="border-2 border-amber-600 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Share Your Experience
                </h3>
                <form onSubmit={handleSubmitReview} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <Input
                      type="text"
                      required
                      value={reviewData.name}
                      onChange={(e) =>
                        setReviewData((prev) => ({ ...prev, name: e.target.value }))
                      }
                      className="h-12 border-gray-300 focus:border-amber-600 focus:ring-amber-600"
                      placeholder="Enter your name"
                    />
                  </div>

                  {/* Rating Selector */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Rating *
                    </label>
                    <div className="flex space-x-2">
                      {[1, 2, 3, 4, 5].map((rating) => (
                        <button
                          key={rating}
                          type="button"
                          onClick={() => handleRatingClick(rating)}
                          className="focus:outline-none transition-transform hover:scale-110"
                        >
                          <Star
                            className={`w-8 h-8 ${
                              rating <= reviewData.rating
                                ? 'fill-amber-400 text-amber-400'
                                : 'text-gray-300'
                            }`}
                          />
                        </button>
                      ))}
                      <span className="ml-4 text-lg font-semibold text-gray-700">
                        {reviewData.rating} Star{reviewData.rating !== 1 ? 's' : ''}
                      </span>
                    </div>
                  </div>

                  {/* Review Text */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Review *
                    </label>
                    <Textarea
                      required
                      value={reviewData.text}
                      onChange={(e) =>
                        setReviewData((prev) => ({ ...prev, text: e.target.value }))
                      }
                      className="min-h-32 border-gray-300 focus:border-amber-600 focus:ring-amber-600"
                      placeholder="Tell us about your experience at Raghav Hair Salon..."
                    />
                  </div>

                  {/* Submit Buttons */}
                  <div className="flex space-x-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 bg-amber-600 hover:bg-amber-700 text-white h-12 text-lg"
                    >
                      {isSubmitting ? (
                        'Submitting...'
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Submit Review
                        </>
                      )}
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setShowReviewForm(false)}
                      className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 h-12"
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="border-gray-200 hover:shadow-xl transition-shadow duration-300 bg-white"
            >
              <CardContent className="p-6">
                {/* Stars */}
                <div className="flex space-x-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Client Info */}
                <div className="pt-4 border-t border-gray-100">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.date}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Rating Summary */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <div className="flex items-center justify-center space-x-2 mb-4">
              {renderStars(5)}
            </div>
            <p className="text-4xl font-bold text-gray-900 mb-2">4.9 / 5.0</p>
            <p className="text-gray-600">Based on 200+ verified reviews</p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-amber-50 text-amber-700 rounded-full text-sm font-semibold">
                Google Reviews
              </span>
              <span className="px-4 py-2 bg-amber-50 text-amber-700 rounded-full text-sm font-semibold">
                Facebook
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
