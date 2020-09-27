FROM nginx
# Remove default configs
RUN rm /etc/nginx/conf.d/default.conf
RUN rm /etc/nginx/nginx.conf

# Add project config
ADD nginx.conf /etc/nginx/