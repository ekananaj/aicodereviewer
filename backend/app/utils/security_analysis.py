def analyze_security(code):
    # Placeholder: Basic security checks
    security_issues = []
    if "eval(" in code:
        security_issues.append("Avoid using 'eval()' as it can lead to security vulnerabilities.")
    if "exec(" in code:
        security_issues.append("Avoid using 'exec()' as it can execute arbitrary code.")
    # Additional checks can be added here
    return security_issues
