from django.core.mail import EmailMessage, EmailMultiAlternatives
from django.template.loader import render_to_string
from django.conf import settings
from email.mime.image import MIMEImage


def send_subscribed_email(email, app_id, platform):
    context = {
        'app_name': app_id,
        'platform': platform
    }

    email_subject = "Thank you for subscribing to our service"
    email_body = render_to_string('subscribe/email_message.txt', context)
    email = EmailMessage(
        email_subject,
        email_body,
        settings.DEFAULT_FROM_EMAIL,
        [email, ]
    )
    return email.send(fail_silently=False)


def send_feedback_email(email, message):
    context = {
        'email': email,
        'message': message,
    }
    email_subject = f"Feedback from {email}"
    email_body = render_to_string("subscribe/feedback_email.txt", context)
    html_content = render_to_string("subscribe/feedback_email.html", context)
    email = EmailMultiAlternatives(
        email_subject,
        email_body,
        settings.DEFAULT_FROM_EMAIL,
        [settings.DEFAULT_FROM_EMAIL, ]
    )
    email.attach_alternative(html_content, "text/html")
    email.send(fail_silently=False)
    print("SEND")


def send_review_email(email, app_name, app_id, reviews, platform, app_icon):
    for review in reviews:
        active = []
        for i in range(int(review['score'])):
            active.append('I')
        remaining = []
        value = 5 - int(review['score'])
        for i in range(value):
            remaining.append('I')
        review['remaining'] = remaining
        review['score'] = active


    context = {
        'app_name': app_name,
        'app_id': app_id,
        'reviews': reviews,
        'platform': str(platform).capitalize(),
        'app_icon': app_icon,
        'total_reviews': len(reviews)
    }
    email_subject = f"New Reviews for {app_name} app"
    email_body = render_to_string('subscribe/review_email.txt', context)
    html_content = render_to_string('subscribe/review_email.html', context)
    email = EmailMultiAlternatives(
        email_subject,
        email_body,
        settings.DEFAULT_FROM_EMAIL,
        [email, ]
    )
    print(email)
    email.mixed_subtype = 'related'
    email.attach_alternative(html_content, 'text/html')
    # filepath = 'subscribe/static/images/star_checked.png'
    # image = 'star_checked.png'
    # with open(filepath, 'rb') as f:
    #     img = MIMEImage(f.read())
    #     img.add_header('Content-ID', '<{name}>'.format(name=image))
    #     img.add_header('Content-Disposition', 'inline', filename=image)
    # email.attach(img)
    email.send(fail_silently=False)
    print("SEND")
