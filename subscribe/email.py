from django.core.mail import EmailMessage, EmailMultiAlternatives
from django.template.loader import render_to_string
from django.conf import settings


def send_subscribed_email(email, app_id):
    context = {
        'app_name': app_id,
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


def send_review_email(email, app_name, app_id, reviews, service):
    context = {
        'app_name': app_name,
        'app_id': app_id,
        'reviews': reviews,
        'service': service
    }
    email_subject = "Reviews for your subscribed app"
    email_body = render_to_string('subscribe/review_email.txt', context)
    html_content = render_to_string('subscribe/review_email.html', context)
    email = EmailMultiAlternatives(
        email_subject,
        email_body,
        settings.DEFAULT_FROM_EMAIL,
        [email, ]
    )
    print(email)
    email.attach_alternative(html_content, 'text/html')
    email.send(fail_silently=False)
    print("SEND")
