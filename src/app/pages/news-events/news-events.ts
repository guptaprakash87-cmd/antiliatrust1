import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../layout/header/header';
import { FooterComponent } from '../../layout/footer/footer';

@Component({
  selector: 'app-news-events',
  standalone: true,
  imports: [CommonModule, RouterLink, HeaderComponent, FooterComponent],
  templateUrl: './news-events.html',
  styleUrl: './news-events.css',
})
export class NewsEvents {

  news = [
    {
      emoji: '🏆',
      category: 'Award',
      date: 'July 28, 2025',
      title: 'AntiliaTrust Wins National NGO Excellence Award 2025',
      desc: 'We are honoured to receive the National NGO Excellence Award for outstanding contribution to rural education and healthcare, presented by the Ministry of Social Justice.',
      tag: 'Award'
    },
    {
      emoji: '📰',
      category: 'News',
      date: 'July 10, 2025',
      title: 'AntiliaTrust Launches Digital Learning Initiative in 100 New Schools',
      desc: 'As part of our expanded education mission, we have launched digital classrooms in 100 additional rural schools across Odisha, Jharkhand and Chhattisgarh.',
      tag: 'Education'
    },
    {
      emoji: '🤝',
      category: 'Partnership',
      date: 'June 22, 2025',
      title: 'Strategic MoU Signed with State Health Department of Gujarat',
      desc: 'AntiliaTrust has signed a landmark MoU with the Gujarat State Health Department to jointly operate 15 mobile medical units covering 300+ villages.',
      tag: 'Healthcare'
    },
    {
      emoji: '🌳',
      category: 'News',
      date: 'June 5, 2025',
      title: 'Green India Campaign Reaches 1 Million Trees Planted Milestone',
      desc: 'On World Environment Day, our Green India Campaign celebrated planting its one-millionth tree — a major landmark in our climate action journey.',
      tag: 'Environment'
    },
    {
      emoji: '👩‍💼',
      category: 'News',
      date: 'May 18, 2025',
      title: '500 Women Graduate from Entrepreneur Training Program',
      desc: 'Our Women Empowerment Division celebrated 500 women completing the 6-month entrepreneur bootcamp, with 80% launching their own micro-businesses.',
      tag: 'Women'
    },
    {
      emoji: '💰',
      category: 'Fundraise',
      date: 'April 30, 2025',
      title: 'AntiliaTrust Raises ₹2 Crore at Annual Gala',
      desc: 'Our Annual Gala 2025 in Bangalore surpassed all expectations, raising ₹2 crore from 500 philanthropists — funds that will reach 10,000 new beneficiaries.',
      tag: 'Fundraise'
    },
  ];

  events = [
    {
      emoji: '📅',
      date: 'Aug 20, 2025',
      day: '20',
      month: 'AUG',
      title: 'National Education Summit 2025',
      location: 'New Delhi',
      type: 'Conference',
      desc: 'A two-day summit bringing together educators, policy makers and NGOs to discuss rural education reform.'
    },
    {
      emoji: '🩺',
      date: 'Sep 5, 2025',
      day: '05',
      month: 'SEP',
      title: 'Free Health Camp — Bangalore',
      location: 'Bangalore, Karnataka',
      type: 'Health Camp',
      desc: 'Free health check-ups, dental care, eye testing and consultations for underprivileged families.'
    },
    {
      emoji: '🌍',
      date: 'Sep 21, 2025',
      day: '21',
      month: 'SEP',
      title: 'Community Tree Plantation Drive',
      location: 'Jaipur, Rajasthan',
      type: 'Environment',
      desc: 'Join 5,000 volunteers for a massive tree plantation drive on World Peace Day.'
    },
    {
      emoji: '👑',
      date: 'Oct 10, 2025',
      day: '10',
      month: 'OCT',
      title: 'Women Leadership Forum',
      location: 'Mumbai, Maharashtra',
      type: 'Conference',
      desc: 'Celebrating women change-makers and discussing strategies for gender equity in development.'
    },
  ];
}
